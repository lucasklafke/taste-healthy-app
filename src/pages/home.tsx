import styles from '@/styles/home.module.css'
import Image from 'next/image'
import homeImage from '@/assets/images/homeImage.png'
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1 className={styles.title}>Taste Healthy</h1>
      </div>
        <Image src={homeImage} alt="" className={styles.image}/>
        <div className={styles.footer}>
          <button className={styles.button}><span className={styles.span}>Entrar</span></button>
          <span className={styles.subtitle}>Ainda não cadastrado? Registre-se!</span>
        </div>
    </div>
   
  )
}
