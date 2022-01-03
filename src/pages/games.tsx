import GamesTemplate, { GamesTemplateProps } from 'templates/GamesTemplate'

import { initializeApollo } from 'utils/apollo'

import filtersMock from 'components/ExploreSidebar/mock'

import { QUERY_GAMES } from 'graphql/queries/games'
import { GET_GAMES, GET_GAMESVariables } from 'graphql/generated/GET_GAMES'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GET_GAMES, GET_GAMESVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidade: 60,
      games: data.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price)
      })),
      filterItems: filtersMock
    }
  }
}
