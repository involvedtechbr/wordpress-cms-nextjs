import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { HeaderQuery } from '@/__generated__/HeaderQuery.graphql';

type HeaderProps = {
  queryRef: PreloadedQuery<HeaderQuery>;
}

export default function Header({ queryRef }: HeaderProps) {
  const data = usePreloadedQuery(
    graphql`
      query HeaderQuery {
        generalSettings {
          title
          description
        }
      }
    `,
    queryRef
  );
  return (
    <header className="p-3">
      <div>
        <h2>{data.generalSettings?.title}</h2>
      </div>
    </header>
  )
}