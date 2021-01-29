import styles from '../styles/Bases.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Feito com amor com <a target="_blank" href="https://nextjs.org">NextJS</a>!</p>
      <p>Este website foi desenvolvido por Caio Alexandre.</p>
    </footer>
  )
}

export { Footer }