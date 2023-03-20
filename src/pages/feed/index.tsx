import Header from '@/components/headers/LoggedHeader';
import styles from '@/styles/feed.module.css';
import FoodContainer from '@/components/foodContainer/FoodContainer';
export default function Feed() {
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
