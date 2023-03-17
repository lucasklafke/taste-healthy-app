import Image from 'next/image';
import Header from '@/components/Header';
import LoginImage from '@/assets/images/LoginImage.png';
import styles from '@/styles/login.module.css';
import { useState } from 'react';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remeberUser, setRemeberUser] = useState(false);
  function handleSubmit(event: any) {
    event.preventDefault();
  }
  return (
    <div className={styles.loginPage}>
      <Header />
      <Image src={LoginImage} alt="" className={styles.image} />

      <div className={styles.inputContainer}>
        <form autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
          <div>
            <label className={styles.label}>E-mail</label>
            <input
              className={styles.input}
              placeholder="Digite seu e-mail"
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
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
  );
}
