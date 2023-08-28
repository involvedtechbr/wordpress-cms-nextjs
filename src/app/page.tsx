import loadSerializableQuery from '@/lib/relay/loadSerializableQuery';
import MainViewQueryNode, { MainViewQuery } from '@/__generated__/MainViewQuery.graphql';
import HeaderQueryNode, { HeaderQuery } from '@/__generated__/HeaderQuery.graphql';
import MainViewClientComponent from './MainViewClientComponent';
import HeaderClientComponent from './HeaderClientComponent';

export default async function Home() {
  const preloadedQuery = await loadSerializableQuery<typeof MainViewQueryNode, MainViewQuery>(
    MainViewQueryNode.params,
    {},
  );

  const headerPreloadedQuery = await loadSerializableQuery<typeof HeaderQueryNode, HeaderQuery>(
    HeaderQueryNode.params,
    {}
  )

  return (
    <main>
      <HeaderClientComponent preloadedQuery={headerPreloadedQuery} />
      <MainViewClientComponent preloadedQuery={preloadedQuery} />
    </main>
  );
}
