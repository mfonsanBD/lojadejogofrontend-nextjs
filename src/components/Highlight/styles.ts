import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type ImageProps = Pick<HighlightProps, 'img' | 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-columns: 1.3fr 2fr;
    grid-template-areas: 'floatimage content';

    ${Content} {
      text-align: right;
    }
  `,

  left: () => css`
    grid-template-columns: 2fr 1.3fr;
    grid-template-areas: 'content floatimage';

    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `
}

export const Wrapper = styled.section<ImageProps>`
  ${({ img, alignment }) => css`
    position: relative;
    height: 23rem;
    display: grid;
    background-image: url(${img});
    background-position: center center;
    background-size: cover;

    ${wrapperModifiers[alignment!]()}

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    max-height: 23rem;
    max-width: 100%;
    align-self: end;
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.xlarge};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
