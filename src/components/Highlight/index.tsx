import Button from 'components/Button'
import Image from 'next/image'
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
    <S.Wrapper alignment={alignment} data-cy="highlight">
      <Image
        src={background}
        alt={`${title} background`}
        layout="fill"
        objectFit="cover"
      />
      {!!float_image && (
        <S.FloatImageWrapper>
          <Image src={float_image} alt={title} width={400} height={300} />
        </S.FloatImageWrapper>
      )}
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
