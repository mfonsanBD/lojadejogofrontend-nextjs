import Cart, { CartTemplateProps } from 'templates/Cart'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

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
      recommendedGames: GameMapper(data.recommended?.section?.games),
      recommendedHighlight: HighlightMapper(
        data.recommended!.section!.highlight
      )
    }
  }
}
