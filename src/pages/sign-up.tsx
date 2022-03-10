import FormSignUp from 'components/FormSignUp'
import { NextSeo } from 'next-seo'
import Auth from 'templates/Auth'

export default function SignUp() {
  return (
    <Auth title="Sign Up">
      <NextSeo
        title="Sign Up - Won Games"
        description="Register on our platform to buy games and add them to favorites."
        canonical={`https://won-games-self.vercel.app/sign-in`}
        openGraph={{
          url: `https://won-games-self.vercel.app/sign-in`,
          title: 'Sign Up - Won Games',
          description:
            'Register on our platform to buy games and add them to favorites.'
        }}
      />
      <FormSignUp />
    </Auth>
  )
}
