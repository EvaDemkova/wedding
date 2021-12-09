import '../styles/globals.scss';
import variables from '../styles/_variables.module.scss'

function MyApp({ Component, pageProps }) {
  console.log(Component, pageProps)
  return <Component color={variables.primaryColor} {...pageProps} />
}

export default MyApp
