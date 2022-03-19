import Link from "next/link";
import Image from "next/image";
import styles from '/styles/index.module.css'




export default function Produtos(){
    return(
        <section>
           <div className={styles.index}>
           
           
           
           
           
           </div>
           <h1>suco :</h1>
           <li>COPO PEQUENO...R$ 1,00</li><br></br>
           <li>COPO GRANDE......R$ 2,00</li>
           <br></br>
           <h1>Refrigerante:</h1><br></br>
           <li>COPO PEQUENO....R$ 1,00</li><br></br>
           <li>COPO GRANDE......R$ 2,00</li>
           <br></br>
           <button><a href='https://chromedino.com/'>jogo do dino</a></button>
           <br></br>
           <p>enquanto aguarda seu lanche divirta-se com jogo do dino !!</p>
        </section>
    )
}