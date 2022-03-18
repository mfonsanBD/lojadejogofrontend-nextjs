import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Loader from 'components/Loader'
import Showcase from 'components/Showcase'
import { useWishlist } from 'hooks/use-wishlist'
import { NextSeo } from 'next-seo'
import Base from 'templates/Base'
import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedTitle: string
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Wishlist = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()
  return (
    <Base>
      <NextSeo title="Favoritos - Won Games" />
      <Container>
        <Heading lineLeft lineColor="secondary">
          Favoritos
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Sua lista de favoritos está vazia"
            description="Adicione jogos a sua lista de favoritos e eles aparecerão aqui."
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        highlight={recommendedHighlight}
        games={recommendedGames}
      />
    </Base>
  )
}

export default Wishlist
