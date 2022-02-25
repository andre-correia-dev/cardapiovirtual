
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
       
      <h3>Burguers:</h3>
            
              
                <li>

                <Image src='/sanduba.jpg' alt="figure" width={150} height={140} ></Image>
                    burguinho--------R$ 9,99
                </li>
               
                <li>

                <Image src='/sanduba.jpg' alt="figure" width={150} height={140} ></Image>
                      burguinho--------R$ 9,99
                </li>
               

                <li>
                   
                   <Image src='/sanduba.jpg' alt="figure" width={150} height={140} ></Image>burgao-----------R$ 12,99
                   </li>
                   
                   <li>
   
                   <Image src='/sanduba.jpg' alt="figure" width={150} height={140} ></Image>
                       burguinho--------R$ 9,99
                   </li>
                  
                   <li>
   
                   <Image src='/sanduba.jpg' alt="figure" width={150} height={140}></Image>
                         burguinho--------R$ 9,99
                   </li>
                
                   <li>
   
                   <Image src='/sanduba.jpg' alt="figure" width={150} height={140} ></Image>
                          burguinho--------R$ 9,99
                   </li>
                  
                   <br></br>
                   <br></br>

                   
   
                   

                
               
            
           
        </div>

        </>
    )
}
    
       
     
    
 

