import About from './sections/About';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Skills from './sections/Skills';
import styles from './page.module.css';

import { useTranslations } from 'next-intl';
import Projects from './sections/Projects';

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
