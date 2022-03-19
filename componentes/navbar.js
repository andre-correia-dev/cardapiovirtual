import Link from "next/link"

import styles from '../styles/Navbar.module.css'



export default function Navbar(){
    return(
        <div className={styles.Navbar}>
        
        <div>
                <Link href='/'><a><button>🍔<br></br>BURGUER </button></a></Link>
        
       
          <Link href='/produtos'><a><button>🍻<br></br>Bebidas</button></a></Link>
    
        
          <Link href='/sobre'><a><button>🍟 <br></br>salgados</button> </a></Link>

          <h1>Lanchonete familia<br></br> MGA  </h1>
        
        </div>
        <br></br>
      
  
    </div>
    ) 
}