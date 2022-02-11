import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => (
  <>
    <Heading lineBottom size="small" color="black">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        type="text"
        iconPosition="right"
        label="Username"
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
      <TextField
        name="password"
        placeholder="Type your Password"
        type="password"
        iconPosition="right"
        label="Password"
      />
      <TextField
        name="new_password"
        placeholder="New Password"
        type="password"
        iconPosition="right"
        label="New Password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile
