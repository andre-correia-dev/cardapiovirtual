import Link from "next/link";
import Image from "next/image";
import styles from '/styles/burguer1.module.css'





export default function Burguer1(){
    return(
        <div className={styles.burguer1}>
            <h3>Burguers:</h3>
            <br></br>
            <Link href='/produtos'><button>voltar</button></Link>
            
              
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
    )
}