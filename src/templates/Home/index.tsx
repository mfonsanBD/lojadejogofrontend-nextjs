import Base from 'templates/Base'

import Showcase from 'components/Showcase'
import { BannerProps } from 'components/Banner'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import { NextSeo } from 'next-seo'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upComingHighlight: HighlightProps
  upComingGames: GameCardProps[]
  freeHighlight: HighlightProps
  freeGames: GameCardProps[]
  newGamesTitle: string
  mostPopularTitle: string
  upcomingTitle: string
  freeGamesTitle: string
}

const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighlight,
  upComingGames,
  upComingHighlight,
  freeGames,
  freeHighlight,
  newGamesTitle,
  mostPopularTitle,
  upcomingTitle,
  freeGamesTitle
}: HomeTemplateProps) => (
  <Base>
    <NextSeo
      title="Home - Won Games"
      description="All your favorite games in one place. WON is the best and most complete gaming platform."
      canonical={`https://won-games-self.vercel.app`}
      openGraph={{
        url: `https://won-games-self.vercel.app`,
        title: 'Home - Won Games',
        description:
          'All your favorite games in one place. WON is the best and most complete gaming platform.'
      }}
    />
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingTitle}
      highlight={upComingHighlight}
      games={upComingGames}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
)

export default Home
