import { Done } from '@styled-icons/material-outlined/Done'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import { useCart } from 'hooks/use-cart'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useEffect } from 'react'
import Base from 'templates/Base'
import * as S from './styles'

export type SuccessTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Success = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: SuccessTemplateProps) => {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <Base>
      <NextSeo title="Sucesso - Won Games" />
      <Container>
        <S.Wrapper>
          <S.Heading>Compra realizada com sucesso!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Aguarde seus dados de pagamento por e-mail. Seu jogo já está
            disponível para download dentro da sua{' '}
            <Link href="/profile/orders">
              <a>Lista de Pedidos</a>
            </Link>
            . Aproveite!
          </S.Text>
        </S.Wrapper>
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Success
