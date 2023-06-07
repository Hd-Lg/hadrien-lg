import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Skills from './Skills';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h2>Hadrien Lg</h2>
      <Experience />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
