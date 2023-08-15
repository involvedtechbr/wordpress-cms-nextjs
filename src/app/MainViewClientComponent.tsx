'use client';

import MainView from '@/components/MainView';
import { useRelayEnvironment } from 'react-relay';
import { SerializablePreloadedQuery } from '@/lib/relay/loadSerializableQuery';
import indexPageQueryNode, { indexPageQuery } from '@/__generated__/indexPageQuery.graphql';
import useSerializablePreloadedQuery from '@/lib/relay/useSerializablePreloadedQuery';

const MainViewClientComponent = (props: {
  preloadedQuery: SerializablePreloadedQuery<typeof indexPageQueryNode, indexPageQuery>;
}) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(environment, props.preloadedQuery);

  return <MainView queryRef={queryRef} />;
};

export default MainViewClientComponent;
