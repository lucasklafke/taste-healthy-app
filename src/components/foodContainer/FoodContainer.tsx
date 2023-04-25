/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import styles from './foodContainer.module.css'
interface Props {
  title:string
  description: string
  calories: string
  totalFat: string,
  proteins: string,
}
export default function FoodContainer(props: Props) {
  const {title, description, calories, proteins, totalFat} = props
  const foodInfo = {id : 1}
  const route = useRouter()
  return (
    <div className={styles.container} onClick={() => route.push(`/feed/${foodInfo.id}`)}>
      <div className={styles.leftSide}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.image}></div>
        </div>
        <div className={styles.infoContainer}>
          <span className={styles.infoText}>Calories:{calories} </span>
          <span className={styles.infoText}>Total Fat:{totalFat} </span>
          <span className={styles.infoText}>Proteins:{proteins}</span>
          <span className={styles.infoText}>Calories:{calories}</span>

        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.separator}></div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.descriptionTitle}>Descrição</h2>
          <span className={styles.description}>{description}</span>
          <span className={styles.seeMore}>Ver mais...</span>
        </div>
      </div>
    </div>
  )
}