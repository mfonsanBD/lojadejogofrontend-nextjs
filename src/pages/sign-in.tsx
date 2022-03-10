import FormSignIn from 'components/FormSignIn'
import { NextSeo } from 'next-seo'
import Auth from 'templates/Auth'

export default function SignIn() {
  return (
    <Auth title="Sign In">
      <NextSeo
        title="Login - Won Games"
        description="Log into your account and enjoy our platform."
        canonical={`https://won-games-self.vercel.app/sign-in`}
        openGraph={{
          url: `https://won-games-self.vercel.app/sign-in`,
          title: 'Login - Won Games',
          description: 'Log into your account and enjoy our platform.'
        }}
      />
      <FormSignIn />
    </Auth>
  )
}
