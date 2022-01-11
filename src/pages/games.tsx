import GamesTemplate, { GamesTemplateProps } from 'templates/GamesTemplate'

import { initializeApollo } from 'utils/apollo'

import filtersMock from 'components/ExploreSidebar/mock'

import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      revalidade: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filtersMock
    }
  }
}
