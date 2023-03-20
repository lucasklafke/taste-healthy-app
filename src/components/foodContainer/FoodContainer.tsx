import Image from 'next/image'
import styles from './foodContainer.module.css'

export default function FoodContainer(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Strogonoff</h1>
        <div className={styles.image}></div>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.infoText}>Calories: </span>
        <span className={styles.infoText}>Total Fat: </span>
        <span className={styles.infoText}>Proteins: </span>
        <span className={styles.infoText}>Calories: </span>

      </div>
      <div className={styles.separator}></div>
      <div className={styles.descriptionContainer}>
        <h2 className={styles.descriptionTitle}>Descrição</h2>
        <span className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</span>
        <span className={styles.seeMore}>Ver mais...</span>
      </div>
    </div>
  )
}