import MainContainer from '../componentes/mainconteiner'
import '../styles/globals.css'
import burguer1 from '../styles/burguer1.module.css'
import index from '../styles/index.module.css'
import bebida1 from '../styles/bebida1.module.css'
import sobre from '../styles/sobre.module.css'



function MyApp({ Component, pageProps }) {
  return (
    <MainContainer >
    <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
