import Link from 'next/link'
import { useState } from 'react'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'

import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { UsersPermissionsRegisterInput } from '../../graphql/generated/globalTypes'

import { Email, Lock, AccountCircle } from 'styled-icons/material-outlined'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser] = useMutation(MUTATION_REGISTER)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          onInputChange={(v) => handleInput('username', v!)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="E-mail"
          type="email"
          onInputChange={(v) => handleInput('email', v!)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v!)}
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm Password"
          type="password"
          onInputChange={(v) => handleInput('confirm-password', v!)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth>
          Sign Up Now
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
