import Link from "next/link";
import Image from "next/image";
import styles from '/styles/index.module.css'
import Head from 'next/head'




export default function Produtos(){
    return(
        <section>
           <Head>
      <link  rel='shortcut icon' href='/favicon.jpg'></link>
       <title>Cardapio virtual</title>
       <meta name='keyworkds' content='comidas, lanches,hamburguer,hotdog'></meta>
       <meta name='description' content='encontre o melhor lanche pra voce'></meta>
    </Head>

           <div className={styles.index}>
           </div>
           <h1>suco :</h1>
           <li>COPO ...R$ 3,00</li><br></br> 
           <li>COPO vitamina......R$ 4,00</li>
           <br></br>
           <h1>Refrigerante:</h1><br></br>
           <ul>
              <p>2 litros:</p>
              <li>fanta, cocacola......R$ 12,00</li><br></br>
              <li>pepsi, guarana ant.R$ 10,00</li><br></br>
              <p>1 litro</p>
              <li>pepsi, guarana ant.....R$ 6,00</li>
              <p>200 ml</p>
              <li>pepsi, guarana ant.....R$ 2,00</li>
              <p>250 ml</p>
              <li>cocacola.....................R$ 2,50</li>
              <li></li>

           </ul>
           <br></br>
           <a href='https://cdn.htmlgames.com/BurgerShop/'><img src='burguergame.jpg'></img> </a><p>Divirta-se com burguergame</p>
        </section>
    )
}