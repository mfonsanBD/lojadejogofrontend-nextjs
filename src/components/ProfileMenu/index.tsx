import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { push } = useRouter()
  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link title="My profile" isActive={activeLink === '/profile/me'}>
          <AccountCircle size={24} />
          <span>My Profile</span>
        </S.Link>
      </Link>
      <Link href="/profile/orders" passHref>
        <S.Link title="My orders" isActive={activeLink === '/profile/orders'}>
          <FormatListBulleted size={24} />
          <span>My Orders</span>
        </S.Link>
      </Link>
      <S.Link
        role="button"
        onClick={async () => {
          const data = await signOut({ redirect: false, callbackUrl: '/' })
          push(data.url)
        }}
        title="sign out"
      >
        <ExitToApp size={24} />
        <span>Sign Out</span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
