import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { GridContent } from '../components/grids'
import { Footer } from '../components/bases'
import { getAge } from '../utils'

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
        <h2>Olá, estava esperando você chegar! 👋</h2>
        <p>Sou Caio Alexandre, um programador procurando aventuras pelos cosmos.</p>
      </div>
    </>
  )
}

function SkillsGrid() {
  return (
    <div className={styles.skills_grid}>
      <GridContent>Um programador proficiente em Python.</GridContent>
      <GridContent>Estou sempre disposto a aprender mais.</GridContent>
      <GridContent>Possuo conhecimentos em diversas áreas.</GridContent>
      <GridContent>Sei trabalhar em equipe usando Git e GitHub.</GridContent>
      <GridContent>Conhecimentos consideráveis em NodeJS, SQL, C++ e etc.</GridContent>
      <GridContent>Absorvo conhecimento fácil e rapidamente.</GridContent>
      <GridContent>Tenho experiências com Linux (Ubuntu e Manjaro).</GridContent>
      <GridContent>Resolvo suas issues e reviso seus pull requests.</GridContent>
      <GridContent>Experiências com Django, Express e NextJS.</GridContent>
    </div>
  )
}

function Content() {
  return (
    <div className={styles.content}>
      <Welcoming />
      <SkillsGrid />
    </div>
  )
}

function About() {
  const age = getAge(new Date(2002, 7, 13))

  return (
    <>
      <div className={styles.separator}></div>
      <div className={styles.about}>
        <h2>Afinal, quem sou eu?</h2>
        <p>
          Olá! Meu nome é Caio Alexandre. Sou um desenvolvedor proficiente em Python de {age} anos!
          Atualmente moro no Distrito Federal e estou procurando novas vagas para estágio. Garanto
          que irei ser uma grande adição para sua empresa! Para mais informações, me mande um e-mail.
        </p>
      </div>
    </>
  )
}

function Home() {
  return (
    <>
      <Grid />
      <Content />
      <About />
      <Footer />
    </>
  )
}

export default Home
