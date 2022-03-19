
import styles from '../styles/Home.module.css'

import Image from "next/image";
import burger2 from '../public/burger2.jpg'
import batata1 from'../public/batata1.jpg'
import Head from 'next/head';
import pinup from '../public/pinup.png'




export default function Home() {
  return (

    <>
    <Head>
      <link  rel='shortcut icon' href='/favicon.jpg'></link>
       <title>Cardapio virtual</title>
       <meta name='keyworkds' content='comidas, lanches,hamburguer,hotdog'></meta>
       <meta name='description' content='encontre o melhor lanche pra voce'></meta>
    </Head>






      <div className={styles.container}>
       </div>
        <div className='lista'>
          <h1>Hamburguers</h1>
          <br></br>
          <li>X-SALADA...R$ 6,00</li><br></br>
          <p>hamburguer, ovo, alface, tomate</p><br></br>
          <li>X-BURGUER.....R$ 8,00</li><br></br>
          <p>hamburguer, ovo, presunto, queijo, alface e tomate</p><br></br>
          <li>X-BACON.....R$ 10,00</li><br></br>
          <p>hamburguer, ovo, presunto,queijo, bacon ,salsicha,tomate</p><br></br>
          <li>X-CALABRESA.....10,00</li><br></br>
          <p>hamburguer, ovo, presunto,queijo, calabresa, salsicha,alface, tomate</p><br></br>
          <li>X-TUDO....16,00</li><br></br>
          <p>hamburguer, ovo, presunto,queijo, bacon, milho,batata-palha, salsicha, alface, tomate</p><br></br>
          <li>X-TUDO DUPLO ...25,00</li><br></br>
          <p>simplesmente DELICIOSO!!!!!</p>
          <br></br>
        <button><a href='https://chromedino.com/'>jogo do dino</a></button><p>enquanto aguarda seu lanche divirta-se com jogo do dino !!</p>
        </div>
       
      
        

        </>
    )
}
    
       
     
    
 

