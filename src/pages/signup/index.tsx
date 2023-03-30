import FormularyError from '@/components/errorComponents/formularyError'
import Header from '@/components/headers/Header'
import Input from './styles'
import styles from '@/styles/signup.module.css'
import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import { useSignupForm, FormActions } from '@/contexts/signupContext'

export default function Login() {
  const router = useRouter()
  const {state, dispatch} = useSignupForm()
  
  const handleInputChange =(event:ChangeEvent<HTMLInputElement>, action:string) => {
    switch(action) {
    case 'setEmail':
      return dispatch({
        type: FormActions.setEmail,
        payload: event.target.value
      })
    case 'setPassword':
      return dispatch({
        type: FormActions.setPassword,
        payload: event.target.value
      })
    case 'setConfirmPassword':
      return dispatch({
        type: FormActions.setConfirmPassword,
        payload: event.target.value
      })
    default:
      console.log(state)
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    switch('') {
    case state.email:
      window.alert('erro no email')
      console.log(state)
      return dispatch({ type: FormActions.setError, payload: 'email'})
    case state.password:
      window.alert('erro no password')
      console.log(state)
      return dispatch({ type: FormActions.setError, payload: 'password'})
    case state.confirmPassword:
      window.alert('erro no confirm password')
      console.log(event.target)
      return dispatch({ type: FormActions.setError, payload: 'confirmPassword'})
    default:
      router.push('/signup/register')
    }
  }
  return (
    <div className={styles.page}>
      <Header />
      <h2 className={styles.title}>Cadastro</h2>
      <div className={styles.separator}></div>
      {state.error? <FormularyError><span>{state.error} não informado</span></FormularyError> : <></>}
      <form className={styles.form} autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="password" className={styles.label}>
            Email
          </label>
          <Input placeholder='digite seu email' type="email" value={state.email} border={state.error === 'email'? '1px red solid' : 'none'} onChange={(event) => handleInputChange(event, 'setEmail')} />
        </div>
        <div className={styles.InputContainer}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <Input
            type="password"
            border={state.error === 'password'? '1px red solid' : 'none'}
            name="password"
            className={styles.Input}
            autoComplete="off"
            placeholder="Digite sua senha"
            value={state.password} 
            onChange={(event) => handleInputChange(event, 'setPassword')}
          />
        </div>
        <div className={styles.InputContainer}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirmar senha
          </label>
          <Input
            type="password"
            border={state.error === 'password'? '1px red solid' : 'none'}
            name="confirmPassword"
            className={styles.Input}
            autoComplete="off"
            placeholder="Digite sua senha novamente"
            value={state.confirmPassword} onChange={(event) => handleInputChange(event, 'setConfirmPassword')}
          />
        </div>
        <button className={styles.nextButton}>Avançar</button>
      </form>
    </div>
  )
}
