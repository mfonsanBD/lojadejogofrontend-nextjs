import { Divider } from 'components/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GameCardProps } from 'components/GameCard'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Base from 'templates/Base'
import * as S from './styles'

export type GameTemplateProps = {
  slug?: string
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  gameDetails: GameDetailsProps
  upComingTitle: string
  upComingHighlight: HighlightProps
  upComingGames: GameCardProps[]
  recommendedTitle: string
  recommendedGames: GameCardProps[]
}

const Game = ({
  slug,
  cover,
  gameInfo,
  gallery,
  description,
  gameDetails,
  upComingTitle,
  upComingHighlight,
  upComingGames,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <NextSeo
      title={`${gameInfo.title} - Won Games`}
      description={gameInfo.description}
      canonical={`https://won-games-self.vercel.app/game/${slug}`}
      openGraph={{
        url: `https://won-games-self.vercel.app/game/${slug}`,
        title: `${gameInfo.title} - Won Games`,
        description: gameInfo.description,
        images: [
          {
            url: cover,
            alt: `${gameInfo.title}`
          }
        ]
      }}
    />
    <S.CoverWrapper>
      <Image src={cover} alt={gameInfo.title} layout="fill" objectFit="cover" />
    </S.CoverWrapper>
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Descrição" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...gameDetails} />
        <Divider />
      </S.SectionGameDetails>

      <S.SectionUpcoming>
        <Showcase
          title={upComingTitle}
          highlight={upComingHighlight}
          games={upComingGames}
        />
        <Showcase title={recommendedTitle} games={recommendedGames} />
      </S.SectionUpcoming>
    </S.Main>
  </Base>
)

export default Game
