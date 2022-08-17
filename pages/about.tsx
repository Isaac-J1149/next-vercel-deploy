import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import styles from "../components/layouts/MainLayout.module.css";
import { DarkLayout } from "../components/layouts/DarkLayout";

export default function About_Page() {
  return (
    <>
      <h1>About </h1>
      <h1 className={styles.title}>
        Ir a <Link href="/"> Home</Link>
      </h1>
      <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </>
  );
}

About_Page.getLayout = function getLayout(page:JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
};
