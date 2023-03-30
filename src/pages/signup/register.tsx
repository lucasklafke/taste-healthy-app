import FormularyError from '@/components/errorComponents/formularyError'
import Header from '@/components/headers/Header'
import { FormActions, useSignupForm } from '@/contexts/signupContext'
import styles from '@/styles/signup.module.css'
import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import Input, { Select } from './styles'
export default function Login() {
  const router = useRouter()
  const {state, dispatch} = useSignupForm()
  
  const handleInputChange =(event:ChangeEvent<HTMLInputElement>, action:string) => {
    switch(action) {
    case 'setGender':
      return dispatch({
        type: FormActions.setGender,
        payload: event.target.value
      })
    case 'setUsername':
      return dispatch({
        type: FormActions.setUsername,
        payload: event.target.value
      })
    default:
      console.log(state)
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    console.log(state)
    switch('') {
    case state.username:
      window.alert('erro no username')
      return dispatch({type: FormActions.setError, payload: 'username'})
    case state.gender:
      window.alert('erro no gender')
      return dispatch({type: FormActions.setError, payload: 'gender'})
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
      <form onSubmit={(event) => handleSubmit(event)} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="username">Nome de Usuário</label>
          <Input type="text" name="username" border={state.error === 'username'? '1px red solid' : 'none'} value={state.username} onChange={(event) => {handleInputChange(event, 'setUsername')}}/>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="gender">Gênero</label>
          <Select name="gender" id="gender" className={styles.select} border={state.error === 'gender'? '1px red solid' : 'none'} onChange={(e) => dispatch({type:FormActions.setGender, payload: e.target.value})}>
            <option value='' onClick={() => console.log('sdasuidghsduia')}></option>
            <option value="masculino" >masculino</option>
            <option value="feminino" >feminino</option>
            <option value="outro">outro</option>
          </Select>
        </div>
        <button className={styles.registerButton}>Registrar-se</button>
      </form>
    </div>
  )
}
