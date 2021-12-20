import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Search as SearchIcon } from '@styled-icons/remix-line/Search'
import { ShoppingCart as CartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/store" passHref>
            <S.MenuLink>Loja</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <CartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">Sign In</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/store" passHref>
            <S.MenuLink>Loja</S.MenuLink>
          </Link>

          {!!username && (
            <>
              <S.MenuLink href="#">Minha Conta</S.MenuLink>
              <S.MenuLink href="#">Favoritos</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign In
              </Button>
            </Link>
            <span>ou</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Crie sua conta">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
