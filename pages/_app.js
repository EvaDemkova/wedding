import '../styles/globals.scss';
import variables from '../styles/_variables.module.scss'
import '../styles/mui.scss'

function MyApp({ Component, pageProps }) {
  return <Component color={variables.primaryColor} {...pageProps} />
}

export default MyApp
