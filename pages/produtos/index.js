import Link from "next/link";
import Image from "next/image";
import styles from '/styles/index.module.css'




export default function Produtos(){
    return(
        <section>
           <div className={styles.index}>
           
           
           
           
           
           </div>
           <h1>suco :</h1>
           <li>COPO ...R$ 3,00</li><br></br> 
           <li>COPO vitamina......R$ 4,00</li>
           <br></br>
           <h1>Refrigerante:</h1><br></br>
           <ul>
              <p>2 litros:</p>
              <li>fanta, cocacola......R$ 12,00</li><br></br>
              <li>pepsi, guarana ant.R$ 10,00</li><br></br>
              <p>1 litro</p>
              <li>pepsi, guarana ant.....R$ 6,00</li>
              <p>200 ml</p>
              <li>pepsi, guarana ant.....R$ 2,00</li>
              <p>250 ml</p>
              <li>cocacola.....................R$ 2,50</li>
              <li></li>

           </ul>
           <br></br>
           <button><a href='https://chromedino.com/'>jogo do dino</a></button>
           <br></br>
           <p>enquanto aguarda seu lanche divirta-se com jogo do dino !!</p>
        </section>
    )
}