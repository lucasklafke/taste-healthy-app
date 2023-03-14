import Image from 'next/image'
import Header from '@/components/Header'
import LoginImage from '@/assets/images/LoginImage.png'
import styles from '@/styles/login.module.css'
export default function Login() {
  return (
  <div className={styles.loginPage}>
    <Header/>
    <Image src={LoginImage} alt="" className={styles.image}/>

    <div className={styles.inputContainer}>
      <div>
        <span className={styles.label}>E-mail</span>
        <form autoComplete='off'>
          <input className={styles.input} placeholder='Digite seu e-mail' type='email' autoComplete='off' />
        </form>
      </div>
      <div>
      <span className={styles.label}>Password</span>
      <form autoComplete='off'>
        <input className={styles.input} placeholder='Digite sua senha' type='password' autoComplete='off'/>
      </form>
      </div>
    </div>
    <div className={styles.confirmContainer}>
      <button className={styles.confirmButton}>Entrar</button>
      <div className={styles.checkBoxContainer}>
        <input type='checkbox'></input>
        <span className={styles.span}>Lembrar meu usuário</span>
      </div>
    </div>
  </div>

  )
}
