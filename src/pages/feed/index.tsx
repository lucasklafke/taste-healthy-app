import FoodContainer from '@/components/foodContainer/FoodContainer'
// import {IoArrowDownSharp} from 'react-icons/io5'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/feed.module.css'
// import OpenOverlayButton from '@/components/buttons/OpenOverlayButton'
import axios, { AxiosResponse } from 'axios'
import DefaultPage from '@/themes/pages/DefaultPage/DefaultPage'
import { FeedSelect } from '@/components/select/feedSelect/FeedSelect'
interface dish {
  name: string
  description: string,
  preparation: string,
  author_id: number,
  ingredient_dosage: [
    {
      quantity: string
      ingredient: {
        name: string
      }
    }
  ]


}
export default function Feed() {
  const [data, setData] = useState<null | dish[]>(null)
  console.log('data', data)
  const fetchData = async () => {
    const url = '/api/recipe'
    try{
      const result: AxiosResponse = await axios.get(url)
      console.log(result)
      setData(result.data)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
    setDocumentVisible(document.body)
  },[])
  const [documentVisible, setDocumentVisible] = useState<HTMLElement | null>(null)
  const filterOptions = [
    { value: 'todos', label: 'todos' },
    { value: 'receitas', label: 'receitas' },
    { value: 'ingredientes', label: 'ingredientes' }
  ]
  const orderOptions = [
    { value: 'Mais Recentes', label: 'Mais Recentes' },
    { value: 'Mais Populares', label: 'Mais Populares' },
    { value: 'Mais avaliados', label: 'Mais Avaliados' }
  ]
  return (
    <DefaultPage>
      <h1 className={styles.title}>Ache a sua refeição ideal!</h1>
      <hr className={styles.separator}/>
      <div className={styles.filters}>
        {/* <div>
          <input type="checkbox" name='dishes' />
          <label htmlFor="dishes">Receitas</label>
        </div>
        <div>
          <input type="checkbox" name='ingredients' />
          <label htmlFor="ingredients">Ingredientes</label>
        </div> */}
        <div>
          <label htmlFor="">Filtrar</label>
          {documentVisible? <FeedSelect options={filterOptions}/>: null}
        </div>
        <div>
          <label htmlFor="">Ordenar</label>
          {documentVisible? <FeedSelect options={orderOptions}/>: null}
        </div>
      </div>
      <main className={styles.feedContent}>
        {data !== null ? data.map((recipe, index) => <FoodContainer key={index} title={recipe.name} description={recipe.description} proteins={'15'} totalFat='15' calories={'15'}/>) : <></>}
      </main>
    </DefaultPage>
  )
}
