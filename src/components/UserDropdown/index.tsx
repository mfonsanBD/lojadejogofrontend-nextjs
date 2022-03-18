import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import {
  AccountCircle,
  ExitToApp,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Dropdown from 'components/Dropdown'
import { signOut } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  const { push } = useRouter()
  return (
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
          <S.Link title="minha conta">
            <AccountCircle size={24} />
            <span>Minha Conta</span>
          </S.Link>
        </Link>

        <Link href="/wishlist" passHref>
          <S.Link title="favoritos">
            <FavoriteBorder size={24} />
            <span>Favoritos</span>
          </S.Link>
        </Link>

        <S.Link
          role="button"
          onClick={async () => {
            const data = await signOut({ redirect: false, callbackUrl: '/' })
            push(data.url)
          }}
          title="Sair"
        >
          <ExitToApp size={24} />
          <span>Sair</span>
        </S.Link>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
