import Cart, { CartTemplateProps } from 'templates/Cart'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { initializeApollo } from 'utils/apollo'
import { GameMapper, HighlightMapper } from 'utils/mappers'

export default function Index(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      recommendedTitle: data.recommended?.section?.title,
      recommendedHighlight: HighlightMapper(
        data.recommended!.section!.highlight
      ),
      recommendedGames: GameMapper(data.recommended?.section?.games),
      items: itemsMock,
      total: 'R$ 430,00',
      cards: cardsMock
    }
  }
}
