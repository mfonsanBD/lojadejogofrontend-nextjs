import Success, { SuccessTemplateProps } from 'templates/Success'

import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { GameMapper, HighlightMapper } from 'utils/mappers'

export default function Index(props: SuccessTemplateProps) {
  return <Success {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    revalidate: 60 * 60,
    props: {
      recommendedTitle: data.recommended?.section?.title,
      recommendedHighlight: HighlightMapper(
        data.recommended!.section!.highlight
      ),
      recommendedGames: GameMapper(data.recommended?.section?.games)
    }
  }
}
