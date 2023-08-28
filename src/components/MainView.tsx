import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { MainViewQuery } from '@/__generated__/MainViewQuery.graphql';
import Image from 'next/image';

export default function MainView(props: { queryRef: PreloadedQuery<MainViewQuery> }) {
  const data = usePreloadedQuery(
    graphql`
      query MainViewQuery {
        generalSettings {
          title
          description
        }
        page(id: "home", idType: URI) {
          id
          banner {
            titulo
            descricao
            bannerImage {
              sourceUrl
              altText
            }
          }
        }
      }
    `,
    props.queryRef,
  );

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="mb-8 text-4xl text-neutral-950 font-bold">{data.generalSettings?.title}</h1>
      <p className="text-xl text-neutral-950 font-normal">{data.generalSettings?.description}</p>
      <div className="mt-10">
        <h1 className="text-xl text-neutral-950 font-semibold">{data.page?.banner?.titulo}</h1>
        <p className="text-base text-neutral-950 font-normal">{data.page?.banner?.descricao}</p>
        <Image className="rounded-lg" src={`${data.page?.banner?.bannerImage?.sourceUrl}`} alt={`${data.page?.banner?.bannerImage?.altText}`} width={500} height={500} priority />
      </div>
    </div>
  );
}
