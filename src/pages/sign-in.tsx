import FormSignIn from 'components/FormSignIn'
import { NextSeo } from 'next-seo'
import Auth from 'templates/Auth'

export default function SignIn() {
  return (
    <Auth title="Entrar">
      <NextSeo
        title="Entrar - Won Games"
        description="Entre em sua conta e aproveite nossa plataforma."
        canonical={`https://wongames.mikedev.com.br/sign-in`}
        openGraph={{
          url: `https://wongames.mikedev.com.br/sign-in`,
          title: 'Entrar - Won Games',
          description: 'Entre em sua conta e aproveite nossa plataforma.'
        }}
      />
      <FormSignIn />
    </Auth>
  )
}
