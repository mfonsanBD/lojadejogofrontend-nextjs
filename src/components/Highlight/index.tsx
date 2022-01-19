import Button from 'components/Button'
import * as S from './styles'

export type HighlightAlignment = 'right' | 'left'

export type HighlightProps = {
  background: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  float_image?: string
  alignment?: HighlightAlignment
}

const Highlight = ({
  background,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  float_image,
  alignment = 'right'
}: HighlightProps) => {
  return (
    <S.Wrapper background={background} alignment={alignment}>
      {!!float_image && <S.FloatImage src={float_image} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default Highlight
