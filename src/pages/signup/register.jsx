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
  </div>

  )
}
