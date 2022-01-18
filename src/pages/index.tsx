import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { BannerMapper, HighlightMapper } from 'utils/mappers'
import { GameMapper } from '../utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloCliente = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloCliente.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 10,
    props: {
      banners: BannerMapper(banners),
      newGamesTitle: sections!.newGamesSection!.title,
      newGames: GameMapper(newGames),
      mostPopularTitle: sections!.popularGamesSection!.title,
      mostPopularHighlight: HighlightMapper(
        sections!.popularGamesSection!.highlight
      ),
      mostPopularGames: GameMapper(sections!.popularGamesSection!.games),
      upcomingTitle: sections!.upcomingGamesSection!.title,
      upComingHighlight: HighlightMapper(
        sections!.upcomingGamesSection!.highlight
      ),
      upComingGames: GameMapper(upcomingGames),
      freeGamesTitle: sections!.freeGamesSection!.title,
      freeHighlight: HighlightMapper(sections!.freeGamesSection!.highlight),
      freeGames: GameMapper(freeGames)
    }
  }
}
