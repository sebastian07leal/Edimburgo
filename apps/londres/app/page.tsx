import Image from "next/image";
import { Button } from "../../../packages/button/src/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
        </div>
        <Button appName="web" className={styles.secondary}>
          Open alert two
        </Button>
      </main>
    </div>
  );
}
