'use client';
import { useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const home = homeRef.current;
    const about = aboutRef.current;
    const skills = skillsRef.current;
    const contact = contactRef.current;

    gsap.to(home, {
      x: -150,
      opacity: 1,
      duration: 2,
    });

    gsap.to(about, {
      x: -50,
      opacity: 1,
      duration: 2,
    });

    gsap.to(skills, {
      x: 50,
      opacity: 1,
      duration: 2,
    });

    gsap.to(contact, {
      x: 150,
      opacity: 1,
      duration: 2,
    });
  }, []);
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <a ref={homeRef} id='text' href='#' className={styles.linkHome}>
          Home
        </a>
        <a ref={aboutRef} id='text' href='#' className={styles.linkAbout}>
          About
        </a>
        <a ref={skillsRef} id='text' href='#' className={styles.linkSkills}>
          Skills
        </a>
        <a ref={contactRef} id='text' href='#' className={styles.linkContact}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
