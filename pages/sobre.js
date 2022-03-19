import Link from "next/link"
import styles from '/styles/sobre.module.css'
import Image from "next/image"
import pinup from '../public/pinup.png'


export default function Sobre(){
    return (
        <section>
            <div className={styles.sobre}>
            
            
            </div>
            <h1>salgados:</h1>
            <br></br>
            <li>CACHORRO QUENTE Chapa................R$ 5,00</li><p>bacon,milho,batata-palha,salsicha,presunto,queijo</p><br></br>
            <li>CACHORRO QUENTE tradicional...............R$ 4,00</li><br></br>
            <li>PASTEL...............R$ 3,00</li><br></br>
            <li>BOLO...................R$ 3,00</li><br></br>
            <li>COXINHA............R$ 3,00</li><br></br>
            <li>MISTO.................R$ 3,00</li>
            <li>ENROLADINHO DE SALSICHA................R$ 3,00</li>
            <br></br>
            <h1>Batata frita:</h1>
            <li> Porçao pequena...R$ 5,00</li>
            <li>Porçao GRANDE R$ 10,00</li>
            <br></br>
            <button><a href='https://chromedino.com/'>jogo do dino</a></button><p>enquanto aguarda seu lanche divirta-se com jogo do dino !!</p>
        </section>
    )
 }