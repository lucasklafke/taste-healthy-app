import styles from '@/styles/home.module.css'
import Image from 'next/image'
import homeImage from '@/assets/images/homeImage.png'
import Link from 'next/link'
import Header from '@/components/Header'
export default function Home() {
  return (
    <div className={styles.home}>
      <Header/>
        <Image src={homeImage} alt="" className={styles.image}/>
        <div className={styles.footer}>
          <button className={styles.button}><span className={styles.span}> <Link href='/login'> Entrar</Link></span></button>
          <span className={styles.subtitle}>Ainda não cadastrado? Registre-se!</span>
      </div>
    </div>
   
  )
}
