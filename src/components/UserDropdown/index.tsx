import Link from 'next/link'
import { signOut } from 'next-auth/client'

import Dropdown from 'components/Dropdown'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <S.Username>
        <AccountCircle size={24} />
        {username}
        <ChevronDown size={24} />
      </S.Username>
    }
  >
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link title="my account">
          <AccountCircle size={24} />
          <span>My Account</span>
        </S.Link>
      </Link>

      <Link href="/wishlist" passHref>
        <S.Link title="wishlist">
          <FavoriteBorder size={24} />
          <span>Wishlist</span>
        </S.Link>
      </Link>

      <S.Link role="button" onClick={() => signOut()} title="sign out">
        <ExitToApp size={24} />
        <span>Sign Out</span>
      </S.Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
