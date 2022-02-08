
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
       <title>super Cardapio virtual</title>
       <meta name='keyworkds' content='comidas, lanches,hamburguer,hotdog'></meta>
       <meta name='description' content='encontre o melhor lanche pra voce'></meta>
    </Head>






      <div className={styles.container}>
        <li>
         <Image src={burger2} alt ='figure' width={500}   heigth={800}></Image>
         </li>
         <li>
         <Image  src={batata1} alt='figure' width={500} height={428}></Image>
         </li>
         <div>
         <Image src={pinup} alt='figure' width={200} height={400}></Image>
         </div>
    
       
      </div>
    </>
  )
}
