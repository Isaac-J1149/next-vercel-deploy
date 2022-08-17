import Link from "next/link";
import styles from "../../components/layouts/MainLayout.module.css";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Contact_Page() {
  return (
    <MainLayout>
      <h1>Contact </h1>
      <h1 className={styles.title}>
        Ir a <Link href="/"> Home</Link>
      </h1>
      <h1 className={styles.title}>
        Ir a <Link href="/About"> About</Link>
      </h1>
    </MainLayout>
  );
}
