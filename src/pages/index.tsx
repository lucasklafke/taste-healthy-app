import { useRouter } from 'next/router';
import styles from '@/styles/splash.module.css'
import { useEffect } from 'react';
export default function Splash() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
    router.replace('/home')
  }, 1000);}, [])
  
  return (
    <div className={styles.splash}>
      Taste Healthy
    </div>
  )
}


