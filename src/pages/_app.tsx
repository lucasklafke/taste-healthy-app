import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SignupProvider } from '../contexts/signupContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SignupProvider>
      <Component {...pageProps} />
    </SignupProvider>
  )
}
