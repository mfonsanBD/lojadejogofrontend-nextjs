import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading lineBottom size="small" color="black">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        type="text"
        iconPosition="right"
        label="Name"
        initialValue="John Doe"
      />
      <TextField
        name="email"
        placeholder="E-mail"
        type="email"
        iconPosition="right"
        label="E-mail"
        initialValue="johndoe@exemple.com"
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
