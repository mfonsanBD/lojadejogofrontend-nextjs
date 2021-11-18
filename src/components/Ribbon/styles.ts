import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

type wrapperProps = Pick<RibbonProps, 'color' | 'size'>

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-top-color: ${darken(0.2, theme.colors[color])};
      border-left-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    right: -1.5rem;
    padding: 0 ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xsmall};

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `,

  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    right: -2rem;
    padding: 0 ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `
}

export const Wrapper = styled.div<wrapperProps>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-bottom-width: 1rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }

    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
