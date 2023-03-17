import Header from '@/components/Header';
import styles from '@/styles/signup.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(event: any, path: string) {
    event.preventDefault();
    console.log(email,  confirmEmail, password, confirmPassword);
    router.push(path);
  }
  return (
    <div className={styles.page}>
      <Header />
      <h2 className={styles.title}>Cadastro</h2>
      <div className={styles.separator}></div>
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e, '/signup/register')}
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
          <label htmlFor="confirm-email" className={styles.label}>
            Confirmar E-mail
          </label>
          <input
            type="email"
            name="confirm-email"
            className={styles.input}
            autoComplete="off"
            placeholder="Digite seu e-mail novamente"
            value={confirmEmail}
            onChange={(event) => setConfirmEmail(event.target.value)}
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
        <button className={styles.nextButton}>Avançar</button>
      </form>
    </div>
  );
}