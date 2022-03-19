import Link from "next/link"
import styles from '/styles/sobre.module.css'
import Image from "next/image"
import pinup from '../public/pinup.png'
import Head from 'next/head'


export default function Sobre(){
    return (
        <section>
             <Head>
      <link  rel='shortcut icon' href='/favicon.jpg'></link>
       <title>Cardapio virtual</title>
       <meta name='keyworkds' content='comidas, lanches,hamburguer,hotdog'></meta>
       <meta name='description' content='encontre o melhor lanche pra voce'></meta>
    </Head>

            <div className={styles.sobre}>
            
            
            </div>
            <h1>salgados:</h1>
            <br></br>
            <li>CACHORRO QUENTE Chapa................R$ 5,00</li><p>bacon, milho,batata-palha, salsicha,presunto, queijo</p><br></br>
            <li>CACHORRO QUENTE tradicional...............R$ 4,00</li><br></br>
            <li>PASTEL...............R$ 3,00</li><br></br>
            <li>BOLO...................R$ 3,00</li><br></br>
            <li>COXINHA............R$ 3,00</li><br></br>
            <li>MISTO.................R$ 3,00</li><br></br>
            <li>Enroladinho DE SALSICHA...........R$ 3,00</li>
            <br></br>
            <h1>Batata frita:</h1>
            <li> P. pequena...R$ 10,00</li><br></br>
            <li>P. GRANDE R$ 15,00</li>
            <br></br>
            <button><a href='https://chromedino.com/'>jogo do dino</a></button><p>Enquanto aguarda seu lanche divirta-se com jogo do dino !!</p>
        </section>
    )
 }