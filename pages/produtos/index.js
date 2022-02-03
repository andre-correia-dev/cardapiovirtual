import Link from "next/link";
import Image from "next/image";
import styles from '/styles/index.module.css'




export default function Produtos(){
    return(
        <div className={styles.index}>
           
            <h1>Escolha seu lanche e sua bebida !</h1>
            <br></br>
            <button>
                
                    <Link href='/produtos/burguer/burguer1'><a>Burgrers:</a></Link>
             </button>  
                
                
                   <button>
                    <Link href='/produtos/bebidas/bebida1'><a>Bebidas:</a></Link>
                    </button>
                  
               
               
                
            
            <Link href='/'><button>Voltar</button></Link>
           <div >
               
               <br></br>
           <Image src='/burguer.jpg' alt='figure' width={520} height={170}/>

           <Image src='/sanduba.jpg' alt='figure' width={520} height={170}/>

           <Image src='/hotdog.jpg' alt='figure' width={520} height={170}/>

           <Image src='/cocacola.jpg' alt='figure' width={520} height={170}/>

           <Image src='/suco.jpg' alt='figure' width={520} height={170}/>
           <Image src='/batata2.jpg' alt='figure' width={520} height={170}/>
       


       
       

       
           </div>


        </div>
    )
}