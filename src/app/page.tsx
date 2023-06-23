import Image from 'next/image'
import styles from './page.module.css'
import Header from '../component/header'
import Listed from '../component/listed_products'
export default function Home() {
  return (
    <>
    <Header/>
    <main className={styles.main}>
    <Listed/>
    </main>

    </>

  )
}
