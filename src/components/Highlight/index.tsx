import Button from 'components/Button'
import * as S from './styles'

export type HighlightAlignment = 'right' | 'left'

export type HighlightProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  floatImage?: string
  alignment?: HighlightAlignment
}

const Highlight = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper img={img} alignment={alignment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
