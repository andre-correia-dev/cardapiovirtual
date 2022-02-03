import Navbar from "./navbar";
import Image from "next/image";

import Footer from "./footer";
import styles from '../styles/maincontainer.module.css'

export default function MainContainer({children}){
    return(
        <div>
             <Navbar></Navbar>
             <div className={styles.container}>
                 {children}
                
             </div>
             <Footer></Footer>
        </div>
    )
}