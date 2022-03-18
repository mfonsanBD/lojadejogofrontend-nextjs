import FormSignUp from 'components/FormSignUp'
import { NextSeo } from 'next-seo'
import Auth from 'templates/Auth'

export default function SignUp() {
  return (
    <Auth title="Cadastro">
      <NextSeo
        title="Cadastro - Won Games"
        description="Cadastre-se em nossa plataforma para comprar jogos e adicionar aos seus favoritos."
        canonical={`https://wongames.mikedev.com.br/sign-up`}
        openGraph={{
          url: `https://wongames.mikedev.com.br/sign-up`,
          title: 'Cadastro - Won Games',
          description:
            'Cadastre-se em nossa plataforma para comprar jogos e adicionar aos seus favoritos.'
        }}
      />
      <FormSignUp />
    </Auth>
  )
}
