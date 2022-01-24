import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Divider } from 'components/Divider'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import { Info } from '@styled-icons/material-outlined/Info'

import * as S from './styles'

export type CartTemplateProps = {
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Cart = ({
  recommendedGames,
  recommendedHighlight
}: CartTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        <S.Text>
          <Info size={18} /> Your purchase is protected by a secure connection
          from the WON platform. By purchasing from our store you agree and
          agree to our <a href="#">terms of use.</a> After making the purchase
          you are entitled to a refund within a maximum of 30 days, without any
          additional cost, as long as the download of the purchased game has not
          occurred after your purchase.
        </S.Text>
        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        highlight={recommendedHighlight}
        games={recommendedGames}
      />
    </Base>
  )
}

export default Cart
