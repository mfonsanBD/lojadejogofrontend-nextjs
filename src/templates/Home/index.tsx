import Base from 'templates/Base'

import Showcase from 'components/Showcase'
import { BannerProps } from 'components/Banner'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

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
