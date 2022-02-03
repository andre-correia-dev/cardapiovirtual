import Link from "next/link"

import styles from '../styles/Navbar.module.css'



export default function Navbar(){
    return(
        <div className={styles.Navbar}>
        
        <div>
                <Link href='/'><a><button>Home</button></a></Link>
        
       
          <Link href='/produtos'><a><button>Produtos</button></a></Link>
    
        
          <Link href='/sobre'><a><button>Sobre</button> </a></Link>

          <h1>Cardapio Virtual   🍔 🍟 🍻</h1>
        
        </div>
        <br></br>
      
  
    </div>
    )
}