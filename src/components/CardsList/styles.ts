import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Card = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    padding: 1.3rem ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
