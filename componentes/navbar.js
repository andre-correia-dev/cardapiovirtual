import Link from "next/link"

import styles from '../styles/Navbar.module.css'



export default function Navbar(){
    return(
        <div className={styles.Navbar}>
        
        <div>
                <Link href='/'><a><button>Lanches</button></a></Link>
        
       
          <Link href='/produtos'><a><button>Bebidas</button></a></Link>
    
        
          <Link href='/sobre'><a><button>Novidades</button> </a></Link>

          <h1>Cardapio Virtual   🍔 🍟 🍻</h1>
        
        </div>
        <br></br>
      
  
    </div>
    )
}