import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Skills from './Skills';
import styles from './page.module.css';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Homepage');
  return (
    <main className={styles.wrapper}>
      <h2>{t('title')}</h2>
      <Experience />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
