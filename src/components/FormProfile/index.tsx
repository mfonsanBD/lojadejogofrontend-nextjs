import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Link from 'next/link'
import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => (
  <>
    <Heading lineBottom size="small" color="black">
      Meu Perfil
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Usuário"
        type="text"
        iconPosition="right"
        label="Usuário"
        initialValue={username}
      />
      <TextField
        name="email"
        placeholder="E-mail"
        type="email"
        iconPosition="right"
        label="E-mail"
        initialValue={email}
        disabled
      />

      <S.ButtonsContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button size="medium" minimal as="a">
            Resetar Senha
          </Button>
        </Link>
        <Button size="medium">Salvar</Button>
      </S.ButtonsContainer>
    </S.Form>
  </>
)

export default FormProfile
