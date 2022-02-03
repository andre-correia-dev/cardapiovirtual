import Link from "next/link";
import Image from "next/image";
import styles from'/styles/bebida1.module.css'

export default function Bebida1(){
    return(
        <div className={styles.bebida1} >
            <h1>Bebidas</h1>
            <br></br>
               <Link href='/produtos'><button>voltar</button></Link>

            
            <li>
               <Image src='/cerveja.jpg' alt="figure" width={200} height={100} ></Image><p>cerveja lata------------------R$ 3,99</p>
            </li>
            <li>
               <Image src='/cocacola.jpg' alt="figure" width={200} height={100} ></Image><p>cocacola lata----------------R$ 3,00</p>
            </li>
            <li>
               <Image src='/suco.jpg' alt="figure" width={200} height={100} ></Image><p>suco natural-----------------R$ 3.00</p>
            </li>
            <li>
               <Image src='/cerveja.jpg' alt="figure" width={200} height={100} ></Image><p>cerveja lata--------------------R$ 3,99</p>
            </li>
            <li>
               <Image src='/cocacola.jpg' alt="figure" width={200} height={100} ></Image><p>cocacola lata----------------R$ 3,00</p>
            </li>
            <li>
               <Image src='/suco.jpg' alt="figure" width={200} height={100} ></Image><p>suco natural-----------------R$ 3.00</p>
            </li>
           
            <br></br>
            <br></br>
           
            
                   


                   


            
           
        </div>

    )
}