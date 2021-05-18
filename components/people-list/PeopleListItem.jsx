import styles from './people.module.css'
const People = ({ name, title, deptName, avatarUrl }) => {
  return (
    <li className={styles.card}>
      <div className={styles.listContent}>
        <div className={styles.imageWrapper}>
          <img src={avatarUrl} alt={name} className={styles.profilePic}></img>
        </div>
        <h6 className={`${styles.heading} ${styles.desc}`}>{name}</h6>
        <p className={`paragraph ${styles.desc}`}>{deptName}</p>
        <p className={`paragraph ${styles.title}`}>{title}</p>
      </div>
    </li>
  )
}

export default People
