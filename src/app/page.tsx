import loadSerializableQuery from '@/lib/relay/loadSerializableQuery';
import { SerializablePreloadedQuery } from '@/lib/relay/loadSerializableQuery';
import indexPageQueryNode, { indexPageQuery } from '@/__generated__/indexPageQuery.graphql';
import MainViewClientComponent from './MainViewClientComponent';

export default async function Home() {
  const preloadedQuery = await loadSerializableQuery<typeof indexPageQueryNode, indexPageQuery>(
    indexPageQueryNode.params,
    {},
  );

  return (
    <main>
      <MainViewClientComponent preloadedQuery={preloadedQuery} />
    </main>
  );
}
