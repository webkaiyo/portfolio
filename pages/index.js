import Image from 'next/image'

import styles from '../styles/Home.module.css'

function Grid() {
  return (
    <>
      <div className={styles.grid}>
        <h1>Agregando valores para sua empresa.</h1>
      </div>
      <Image src="/wave.svg" layout="responsive" width={1920} height={427} />
    </>
  )
}

function Content() {
  return (
    <>
      <div className={styles.welcoming}>
        <h2>Olá, estive esperando você chegar! 👋</h2>
        <p>Sou Caio Alexandre, um programador procurando aventuras pelos cosmos.</p>
      </div>
    </>
  )
}

function Home() {
  return (
    <>
      <Grid />
      <Content />
    </>
  )
}

export default Home
