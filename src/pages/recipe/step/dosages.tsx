import React, { useEffect, useState } from 'react'
import DefaultPage from '@/themes/pages/DefaultPage/DefaultPage'
import { ThemeProvider } from 'styled-components'
import theme from '@/themes/ApplicationTheme'
import  CreateRecipeContainer from '../styles'
import { Separator } from '@/themes/separator/separator'
import { useRouter } from 'next/router'
import NextButton from '@/themes/buttons/NextButton'
import axios from 'axios'
import { IngredientSelect } from '@/components/select/ingredientSelect/IngredientSelect'
import {IoClose} from 'react-icons/io5'
// import { IngredientSelect } from '@/components/select/ingredientSelect/IngredientSelect'
interface Ingredient {
  id: 2,
  group_id: 1,
  carbohydrates: 3,
  proteins: 15.9,
  total_fat: 1.4,
  calories: '40',
  description: 'it is 13a special kind of spice',
  info_author_id: 1,
  name: 'lemon'
}

interface Options {
    value: string,
    label: string
}
export default function CreateRecipe() {
  const [options, setOptions] = useState<Options[]>([])
  const [ingredients, setIngredients] = useState<Ingredient[] | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<Options[]>([])
  const handleChange = (selectedOption: Options | null) => {
    if (selectedOption) {
      setSelectedOptions([...selectedOptions, selectedOption])
      setOptions(options.filter((option) => option.value !== selectedOption.value))
    }
  }
  const router = useRouter()
  function nextStep(event:any) {
    event.preventDefault()
    router.push('/step/dosages')
  }
  const getOptions = (ingredients:Ingredient[] | null) => {
    let options: Options[] | null
    if(ingredients !== null) {
      options = ingredients.map(ingredient => {
        return {value: ingredient.name, label: ingredient.name}
      })
      setOptions(options)
    }
  }
  const fetchData = async() => {
    try{
      const result = await axios.get('/api/ingredient')
      setIngredients(result.data)
      getOptions(result.data)
    }catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
    console.log(ingredients)
    console.log(options)
  },[])
  useEffect(() => {
    getOptions(ingredients)
    console.log(ingredients)
    console.log(options)
  },[ingredients])
  return (
    <ThemeProvider theme={theme}>
      <DefaultPage>
        <CreateRecipeContainer>
          <h1 className='title'>Crie a sua receita!</h1>
          <Separator/>
          <form onSubmit={(event) => nextStep(event)}>
            <div className='inputContainer'>
              <label htmlFor="">Ingredientes</label>
              {options !== null? <IngredientSelect options={options} selectedOptions={selectedOptions} handleChange={handleChange}/> : <></>}
            </div>
            <div className='recipeContainer'>
              {selectedOptions.map((option, key) => 
                <div key={key} className='option'>
                  <div>
                    <label htmlFor="">ingrediente</label>
                    <span className='name'>{option.label}</span>
                  </div>
                  <div>
                    <label htmlFor="">quantidade</label>
                    <input type="text" placeholder='Digite a quantidade'/>
                  </div>
                  <div>
                    <label htmlFor="">medida</label>
                    <select>
                      <option value="colher">colher</option>
                      <option value="ml">ml</option>
                      <option value="g">g</option>
                    </select>
                  </div>
                  <IoClose color='#f5f5f5' fontSize='24px' className='closeIcon'/>
                </div>)}
            </div>
            <div className='nextButton'>
              <NextButton>Próximo</NextButton>
            </div>
          </form>
        </CreateRecipeContainer>
      </DefaultPage>
    </ThemeProvider>
  )
}
