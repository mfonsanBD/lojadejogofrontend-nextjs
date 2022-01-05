import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import FormatImageUrl from 'utils/formatImageUrl'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloCliente = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
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
      newGamesTitle: sections!.newGamesSection!.title,
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url,
        price: game.price
      })),
      mostPopularTitle: sections!.popularGamesSection!.title,
      mostPopularHighlight: {
        img: FormatImageUrl(
          sections!.popularGamesSection!.highlight!.background!.url
        ),
        floatImage: FormatImageUrl(
          sections!.popularGamesSection!.highlight!.float_image!.url
        ),
        title: sections!.popularGamesSection!.highlight!.title,
        subtitle: sections!.popularGamesSection!.highlight!.subtitle,
        buttonLabel: sections!.popularGamesSection!.highlight!.buttonLabel,
        buttonLink: sections!.popularGamesSection!.highlight!.buttonLink,
        alignment: sections!.popularGamesSection!.highlight!.alignment
      },
      mostPopularGames: sections!.popularGamesSection!.games.map(
        (mostpopular) => ({
          title: mostpopular.name,
          slug: mostpopular.slug,
          developer: mostpopular.developers[0].name,
          img: mostpopular.cover?.url,
          price: mostpopular.price
        })
      ),
      upcomingTitle: sections!.upcomingGamesSection!.title,
      upComingHighlight: {
        img: FormatImageUrl(
          sections!.upcomingGamesSection!.highlight!.background!.url
        ),
        floatImage: FormatImageUrl(
          sections!.upcomingGamesSection!.highlight!.float_image!.url
        ),
        title: sections!.upcomingGamesSection!.highlight!.title,
        subtitle: sections!.upcomingGamesSection!.highlight!.subtitle,
        buttonLabel: sections!.upcomingGamesSection!.highlight!.buttonLabel,
        buttonLink: sections!.upcomingGamesSection!.highlight!.buttonLink,
        alignment: sections!.upcomingGamesSection!.highlight!.alignment
      },
      upComingGames: upcomingGames.map((upcoming) => ({
        title: upcoming.name,
        slug: upcoming.slug,
        developer: upcoming.developers[0].name,
        img: upcoming.cover?.url,
        price: upcoming.price
      })),
      freeGamesTitle: sections!.freeGamesSection!.title,
      freeHighlight: {
        img: FormatImageUrl(
          sections!.freeGamesSection!.highlight!.background!.url
        ),
        floatImage: FormatImageUrl(
          sections!.freeGamesSection!.highlight!.float_image!.url
        ),
        title: sections!.freeGamesSection!.highlight!.title,
        subtitle: sections!.freeGamesSection!.highlight!.subtitle,
        buttonLabel: sections!.freeGamesSection!.highlight!.buttonLabel,
        buttonLink: sections!.freeGamesSection!.highlight!.buttonLink,
        alignment: sections!.freeGamesSection!.highlight!.alignment
      },
      freeGames: freeGames.map((free) => ({
        title: free.name,
        slug: free.slug,
        developer: free.developers[0].name,
        img: free.cover?.url,
        price: free.price
      }))
    }
  }
}

// img: '/img/red-dead-img.jpg',
//   title: 'Read Dead it’s back',
//   subtitle: 'Come see John’s new adventures',
//   buttonLabel: 'Buy now',
//   buttonLink: '/buy'
