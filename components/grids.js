import styles from '../styles/Grids.module.css'

function ContentGrid(props) {
  const children = props.children
  return (
    <div className={styles.content_grid}>
      <span>{children}</span>
    </div>
  )
}

export { ContentGrid }