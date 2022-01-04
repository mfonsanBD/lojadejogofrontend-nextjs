import Home, { HomeTemplateProps } from 'templates/Home'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloCliente = initializeApollo()

  const {
    data: { banners, newGames }
  } = await apolloCliente.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
        img: banner.img?.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonSize: banner.ribbon.size,
          ribbonColor: banner.ribbon.color
        })
      })),
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url,
        price: game.price
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upComingHighlight: highlightMock,
      upComingGames: gamesMock,
      upComingMoreGames: gamesMock,
      freeHighlight: highlightMock,
      freeGames: gamesMock
    }
  }
}
