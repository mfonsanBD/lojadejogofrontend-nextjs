import Cart, { CartTemplateProps } from 'templates/Cart'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { initializeApollo } from 'utils/apollo'
import { GameMapper, HighlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function Index(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      session,
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
