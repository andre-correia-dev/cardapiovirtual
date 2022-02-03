import Link from "next/link"
import styles from '/styles/sobre.module.css'
import Image from "next/image"
import pinup from '../public/pinup.png'


export default function Sobre(){
    return (
        <div className={styles.sobre}>
           
            <h1>
                Sobre :
            </h1>
            <p>
            A alimentação do <b >Cardapio Virtual</b>  é confecionada nas nossas instalações e está sujeita a critérios rigorosos no âmbito de certificações da qualidade.
            </p>

            <button>

            <Link href='/'><a>voltar</a></Link>

            </button>
            <div>
         <Image src={pinup} alt='figure' width={400} height={1000}></Image>
         </div>
            



        </div>
    )
 }