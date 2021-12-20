import Base from 'templates/Base'

import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import { HighlightProps } from 'components/Highlight'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Divider } from 'components/Divider'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>

      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      highlight={recommendedHighlight}
      games={recommendedGames}
    />
  </Base>
)

export default Wishlist
