import Base from 'templates/Base'

import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  gameDetails: GameDetailsProps
  upComingHighlight: HighlightProps
  upComingGames: GameCardProps[]
  upComingMoreGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  gameDetails,
  upComingHighlight,
  upComingGames,
  upComingMoreGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...gameDetails} />
      </S.SectionGameDetails>

      <S.SectionUpcoming>
        <Showcase
          title="Upcoming"
          highlight={upComingHighlight}
          games={upComingGames}
        />
        <Showcase title="You may like these games" games={upComingMoreGames} />
      </S.SectionUpcoming>
    </S.Main>
  </Base>
)

export default Game
