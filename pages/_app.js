import MainContainer from '../componentes/mainconteiner'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
    <MainContainer >
    <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
