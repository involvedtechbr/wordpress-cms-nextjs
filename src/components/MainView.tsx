import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { indexPageQuery } from '@/__generated__/indexPageQuery.graphql';

export default function MainView(props: { queryRef: PreloadedQuery<indexPageQuery> }) {
  const data = usePreloadedQuery(
    graphql`
      query indexPageQuery {
        generalSettings {
          title
          description
        }
      }
    `,
    props.queryRef,
  );

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="mb-8 text-4xl text-neutral-950 font-bold">{data.generalSettings?.title}</h1>
      <p className="text-xl text-neutral-950">{data.generalSettings?.description}</p>
    </div>
  );
}
