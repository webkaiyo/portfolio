import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { ContentGrid } from '../components/grids'

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

function Welcoming() {
  return (
    <>
      <div className={styles.welcoming}>
        <h2>Olá, estive esperando você chegar! 👋</h2>
        <p>Sou Caio Alexandre, um programador procurando aventuras pelos cosmos.</p>
      </div>
    </>
  )
}

function Skills() {
  return (
    <div className={styles.skills}>
      <ContentGrid>Um programador proficiente em Python.</ContentGrid>
      <ContentGrid>Estou sempre disposto a aprender mais.</ContentGrid>
      <ContentGrid>Possuo conhecimentos em diversas áreas.</ContentGrid>
      <ContentGrid>Sei trabalhar em equipe usando Git e GitHub.</ContentGrid>
      <ContentGrid>Conhecimentos consideráveis em NodeJS, SQL, C++ e etc.</ContentGrid>
      <ContentGrid>Absorvo conhecimento fácil e rapidamente.</ContentGrid>
      <ContentGrid>Tenho experiências com Linux (Ubuntu e Manjaro).</ContentGrid>
      <ContentGrid>Resolvo suas issues e reviso seus pull requests.</ContentGrid>
      <ContentGrid>Experiências com Django, Express e NextJS.</ContentGrid>
    </div>
  )
}

function Content() {
  return (
    <div className={styles.content}>
      <Welcoming />
      <Skills />
    </div>
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
