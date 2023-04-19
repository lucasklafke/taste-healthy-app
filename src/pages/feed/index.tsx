import Header from '@/components/headers/LoggedHeader'
import styles from '@/styles/feed.module.css'
import FoodContainer from '@/components/foodContainer/FoodContainer'
export default function Feed() {
  return (
    <div className={styles.page}>
      <Header />
      <h1 className={styles.title}>Populares</h1>
      <div className={styles.filters}>
        <div>
          <input type="radio" name='dishes' />
          <label htmlFor="dishes">Receitas</label>
        </div>
        <div>
          <input type="radio" name='ingredients' />
          <label htmlFor="ingredients">Ingredientes</label>
        </div>
      </div>
      <main className={styles.feedContent}>

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
      </main>
    </div>
  )
}
