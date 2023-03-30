import Header from '@/components/headers/LoggedHeader'
import styles from '@/styles/feed.module.css'
import FoodContainer from '@/components/foodContainer/FoodContainer'
import { useRouter } from 'next/router'
export default function Feed() {
  const router = useRouter()
  console.log(router.query)
  return (
    <div className={styles.page}>
      <Header />
      <h1 className={styles.title}>Populares</h1>
      <FoodContainer />
      <FoodContainer />
      <FoodContainer />
      <FoodContainer />
      <FoodContainer />
      <FoodContainer />
      <FoodContainer />
      <FoodContainer />
      <FoodContainer />
      <FoodContainer />
    </div>
  )
}
