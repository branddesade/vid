import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <video width="960" height="540" controls>
        <source src="mp4.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        
    </main>
  )
}
