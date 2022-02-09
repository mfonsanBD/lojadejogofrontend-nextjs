import Link from 'next/link'
import { signOut } from 'next-auth/client'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link title="My profile" isActive={activeLink === '/profile/me'}>
        <AccountCircle size={24} />
        <span>My Profile</span>
      </S.Link>
    </Link>
    <Link href="/profile/cards" passHref>
      <S.Link title="My Cards" isActive={activeLink === '/profile/cards'}>
        <CreditCard size={24} />
        <span>My Cards</span>
      </S.Link>
    </Link>
    <Link href="/profile/orders" passHref>
      <S.Link title="My orders" isActive={activeLink === '/profile/orders'}>
        <FormatListBulleted size={24} />
        <span>My Orders</span>
      </S.Link>
    </Link>
    <S.Link role="button" onClick={() => signOut()} title="sign out">
      <ExitToApp size={24} />
      <span>Sign Out</span>
    </S.Link>
  </S.Nav>
)

export default ProfileMenu
