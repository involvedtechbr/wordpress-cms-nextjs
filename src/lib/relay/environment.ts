import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  QueryResponseCache,
  Variables,
  GraphQLResponse,
  CacheConfig,
} from 'relay-runtime';

const GRAPHQL_ENPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
const IS_SERVER = typeof window === typeof undefined;
const ONE_MINUTE_IN_MS = 60 * 1000;

export async function networkFetch(params: RequestParameters, variables: Variables): Promise<GraphQLResponse> {
  // Fetch data from GraphQL API:
  const response = await fetch(GRAPHQL_ENPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  // Get the response as JSON
  const json = await response.json();

  if (Array.isArray(json.errors)) {
    throw new Error(
      `Error fetching GraphQL query '${params.name}' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors,
      )}`,
    );
  }

  // Otherwise, return the full payload.
  return json;
}

export const responseCache = new QueryResponseCache({
  size: 100,
  ttl: ONE_MINUTE_IN_MS,
});

function createNetwork() {
  async function fetchResponse(operation: RequestParameters, variables: Variables, cacheConfig: CacheConfig) {
    const { id } = operation;

    const isQuery = operation.operationKind === 'query';
    const forceFetch = cacheConfig && cacheConfig.force;

    if (isQuery && !forceFetch) {
      const fromCache = responseCache.get(id as string, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return networkFetch(operation, variables);
  }

  const network = Network.create(fetchResponse);

  return network;
}

function createEnvironment() {
  return new Environment({
    network: createNetwork(),
    store: new Store(RecordSource.create()),
    isServer: IS_SERVER,
  });
}

export const environment = createEnvironment();

export function getCurrentEnvironment() {
  if (IS_SERVER) {
    return createEnvironment();
  }

  return environment;
}
