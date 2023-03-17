import Header from '@/components/Header'
import styles from '@/styles/signup.module.css'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  function handleSubmit(event, path) {
    event.preventDefault()
    router.push(path)
  }
  return (
  <div className={styles.page}>
    <Header />
    <h2 className={styles.title}>Cadastro</h2>
    <div className={styles.separator}></div>
    <form action="">
      <div className={styles.inputContainer}>
        <label htmlFor="username">Nome de Usuário</label>
        <input type="text" name='username' className={styles.input}/>
      </div>
      <div className={styles.inputContainer}>
        <select name="" id="" className={styles.input}>
          <option value="Gênero">Gênero</option>
          <option value="masculino">masculino</option>
          <option value="feminino">feminino</option>
          <option value="outro">outro</option>
        </select>
      </div>

    </form>
  </div>

  )
}
