import Header from '@/components/headers/Header';
import styles from '@/styles/signup.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoChevronDown } from "react-icons/io5";
export default function Login() {
  const router = useRouter();
  const [username ,setUsername] = useState('')
  const [gender, setGender] = useState('')
  function handleSubmit(event: any, path: string) {
    event.preventDefault();
    router.push(path);
  }
  return (
    <div className={styles.page}>
      <Header />
      <h2 className={styles.title}>Cadastro</h2>
      <div className={styles.separator}></div>
      <form onSubmit={(event) => handleSubmit(event, '/home')} className={styles.form}>
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
        <button className={styles.registerButton}>Registrar-se</button>
      </form>
    </div>
  );
}
