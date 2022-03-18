import { Apple, Linux, Windows } from '@styled-icons/fa-brands'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

type Platform = 'windows' | 'linux' | 'mac'
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  releaseDate: string
  platforms: Platform[]
  publisher: string
  rating: Rating
  genres: string[]
}

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  publisher,
  rating,
  genres
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }
  return (
    <S.Wrapper data-cy="gameDetails">
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary" color="white">
          Detalhes do Jogo
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Desenvolvedoras</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Data de Lançamento</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('pt-BR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Plataformas</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Editora</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Classificação</S.Label>
          <S.Description>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Gêneros</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
