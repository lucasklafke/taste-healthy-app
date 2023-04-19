import Image from 'next/image'
import Header from '@/components/headers/Header'
import LoginImage from '@/assets/images/LoginImage.png'
import styles from '@/styles/login.module.css'
import { useState } from 'react'
import { Input } from '@/components/inputs/Input'
import axios from 'axios'
import { useRouter } from 'next/router'
import FormularyError from '@/components/errorComponents/formularyError'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remeberUser, setRemeberUser] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  const login = async () => {
    const url = '/api/auth'
    const data = {
      email,
      password
    }
    switch('') {
      case email:
        return setError('email inválido!')
      case password:
        return setError('senha inválida!') 
    }
    try{
      const result = await axios.post(url, data)
      localStorage.setItem('token', JSON.stringify(result.data.access_token))
      router.push('/feed')
    }catch(error:any) {
      setError('email ou senha inválidos!')
    }
  }
  function handleSubmit(event: any) {
    event.preventDefault()
    login()

  }
  return (
    <div className={styles.loginPage}>
      <Header />
      <Image src={LoginImage} alt="" className={styles.image} />

      <div className={styles.inputContainer}>
        {error?<FormularyError><span>{error}</span></FormularyError>: <></>}
        <form autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
          <div>
            <label className={styles.label}>E-mail</label>
            <Input
              placeholder="Digite seu e-mail"
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Password</label>
            <Input
              placeholder="Digite sua senha"
              type="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.confirmContainer}>
            <button className={styles.confirmButton}>Entrar</button>
            <div className={styles.checkBoxContainer}>
              <input
                type="checkbox"
                onClick={() => setRemeberUser(!remeberUser)}
              ></input>
              <span className={styles.span}>Lembrar meu usuário</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
