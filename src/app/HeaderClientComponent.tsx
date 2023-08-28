'use client';

import Header from '@/components/Header/Header';
import { useRelayEnvironment } from 'react-relay';
import { SerializablePreloadedQuery } from '@/lib/relay/loadSerializableQuery';
import HeaderQueryNode, { HeaderQuery } from '@/__generated__/HeaderQuery.graphql';
import useSerializablePreloadedQuery from '@/lib/relay/useSerializablePreloadedQuery';

const HeaderClientComponent = (props: {
  preloadedQuery: SerializablePreloadedQuery<typeof HeaderQueryNode, HeaderQuery>;
}) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(environment, props.preloadedQuery);

  return <Header queryRef={queryRef} />;
};

export default HeaderClientComponent;
