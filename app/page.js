import Image from 'next/image'
import styles from './page.module.css'
import ME from "public/IMG_3619.jpg";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>
        Jayden Sanchez
      </h1>
      <p className={styles.desc}>
      "Quality is not an act, it is a habit" -Aristotle
      </p>
      {/* <Button url="/portfolio" text="See Our Works"/> */}
    </div>
    <div className={styles.item}>
      <Image src={ME} alt="" className={styles.img} />
    </div>
  </div>

  )
}





