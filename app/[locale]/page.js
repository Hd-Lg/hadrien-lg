import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Skills from './Skills';
import styles from './page.module.css';

import { useTranslations } from 'next-intl';
import Projects from './Projects';

export default function Home() {
  const t = useTranslations('Homepage');
  return (
    <main className={styles.wrapper}>
      <h2>{t('title')}</h2>
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
