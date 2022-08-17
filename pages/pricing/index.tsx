import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout"
import styles from "../../components/layouts/MainLayout.module.css";

export default function Pricing() {
  return (
 <MainLayout>
  <h1>Pricing </h1>
        <h1 className={styles.title}>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/"> Home</Link>
        </h1>
 </MainLayout>
  );
}
