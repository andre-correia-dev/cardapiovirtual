import Link from "next/link";
import Image from "next/image";
import styles from '/styles/index.module.css'




export default function Produtos(){
    return(
        <div className={styles.index}>
             <h1>Bebidas</h1>
            <br></br>
              
            
            <li>
               <Image src='/cerveja.jpg' alt="figure" width={150} height={150} ></Image><p>    cerveja lata------------------R$ 3,99</p>
            </li>
            <li>
               <Image src='/cocacola.jpg' alt="figure" width={150} height={150} ></Image><p>cocacola lata----------------R$ 3,00</p>
            </li>
            <li>
               <Image src='/suco.jpg' alt="figure" width={150} height={150} ></Image><p>suco natural-----------------R$ 3.00</p>
            </li>
            <li>
               <Image src='/cerveja.jpg' alt="figure" width={150} height={150} ></Image><p>cerveja lata--------------------R$ 3,99</p>
            </li>
            <li>
               <Image src='/cocacola.jpg' alt="figure" width={150} height={150} ></Image><p>cocacola lata----------------R$ 3,00</p>
            </li>
            <li>
               <Image src='/suco.jpg' alt="figure" width={150} height={150} ></Image><p>suco natural-----------------R$ 3.00</p>
            </li>
           
            <br></br>
            <br></br>
           
            
                   


          

        </div>
    )
}