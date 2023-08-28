'use client';

import MainView from '@/components/MainView';
import { useRelayEnvironment } from 'react-relay';
import { SerializablePreloadedQuery } from '@/lib/relay/loadSerializableQuery';
import MainViewQueryNode, { MainViewQuery } from '@/__generated__/MainViewQuery.graphql';
import useSerializablePreloadedQuery from '@/lib/relay/useSerializablePreloadedQuery';

const MainViewClientComponent = (props: {
  preloadedQuery: SerializablePreloadedQuery<typeof MainViewQueryNode, MainViewQuery>;
}) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(environment, props.preloadedQuery);

  return <MainView queryRef={queryRef} />;
};

export default MainViewClientComponent;
