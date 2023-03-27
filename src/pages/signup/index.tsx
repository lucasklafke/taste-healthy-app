import Header from '@/components/headers/Header';
import styles from '@/styles/signup.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username ,setUsername] = useState('')
  const [gender, setGender] = useState('')

  function handleSubmit(event: any, path: string) {
    event.preventDefault();
    console.log(email, password, confirmPassword);
    const url = `/api/user`
    const data = {
      username,
      email,
      password
    }
    const promise = axios.post(url, data)
    promise.then(response => {
      console.log('asdgfasdg', response)
      setTimeout(() => router.push(path), 1000)
    })
    promise.catch(err => {
      console.log(err.response.data)
    })
  }
  return (
    <div className={styles.page}>
      <Header />
      <h2 className={styles.title}>Cadastro</h2>
      <div className={styles.separator}></div>
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e, '/login')}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            E-mail
          </label>
          <input
            type="email"
            className={styles.input}
            autoComplete="off"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <input
            type="password"
            name="password"
            className={styles.input}
            autoComplete="off"
            placeholder="Digite sua senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirmar senha
          </label>
          <input
            type="password"
            name="confirmPassword"
            className={styles.input}
            autoComplete="off"
            placeholder="Digite sua senha novamente"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="username">Nome de Usuário</label>
          <input type="text" name="username" className={styles.input} value={username} onChange={(event) => {setUsername(event.target.value)}}/>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="gender">Gênero</label>
            <select name="" id="" className={styles.select}>
              <option value={gender}></option>
              <option value="masculino" onClick={() => setGender('masculino')}>masculino</option>
              <option value="feminino" onClick={() => setGender('feminino')}>feminino</option>
              <option value="outro" onClick={() => setGender('outro')}>outro</option>
            </select>
        </div>
        <button className={styles.nextButton}>Avançar</button>
      </form>
    </div>
  );
}
