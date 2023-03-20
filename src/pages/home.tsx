import styles from '@/styles/home.module.css';
import Image from 'next/image';
import homeImage from '@/assets/images/homeImage.png';
import Link from 'next/link';
import Header from '@/components/headers/Header';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  function navigate(path: string) {
    router.push(path);
  }
  return (
    <div className={styles.home}>
      <Header />
      <Image src={homeImage} alt="" className={styles.image} />
      <div className={styles.footer}>
        <button className={styles.button} onClick={() => navigate('login')}>
          <span className={styles.span}>
            {' '}
            <Link href="/login"> Entrar</Link>
          </span>
        </button>
        <span className={styles.subtitle} onClick={() => navigate('signup')}>
          Ainda não cadastrado? Registre-se!
        </span>
      </div>
    </div>
  );
}
