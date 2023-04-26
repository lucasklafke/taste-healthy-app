import React from 'react'
import styles from '@/styles/feed.module.css'
import { Input } from '@/themes/inputs/Input'
import DefaultPage from '@/themes/pages/DefaultPage/DefaultPage'
import NextButton from '@/themes/buttons/NextButton'
import { ThemeProvider } from 'styled-components'
import theme from '@/themes/ApplicationTheme'
import CreateRecipeContainer from './styles'
import { useRouter } from 'next/router'
export default function CreateRecipe() {
  const router = useRouter()
  function nextStep(event:any) {
    event.preventDefault()
    router.push('recipe/step/dosages')
  }
  return (
    <ThemeProvider theme={theme}>
      <DefaultPage>
        <CreateRecipeContainer>
          <h1 className='title'>Crie a sua receita!</h1>
          <hr className={styles.separator}/>
          <form onSubmit={(event) => nextStep(event)}>
            <div className='inputContainer'>
              <label htmlFor="">Nome da receita</label>
              <Input />
            </div>
            <div className='inputContainer'>
              <label htmlFor="">Descrição</label>
              <Input />
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
