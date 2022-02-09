import { useState } from 'react'
import Link from 'next/link'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink, FormLoading } from 'components/Form'

import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { UsersPermissionsRegisterInput } from '../../graphql/generated/globalTypes'

import { Email, Lock, AccountCircle } from 'styled-icons/material-outlined'

import { signIn } from 'next-auth/client'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => console.error(err),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

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

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign Up Now</span>}
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
