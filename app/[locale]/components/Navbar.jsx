'use client';
import { useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { gsap } from 'gsap';
import Link from 'next-intl/link';

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
        <Link ref={homeRef} id='text' href='#' className={styles.linkHome}>
          Home
        </Link>
        <Link ref={aboutRef} id='text' href='#' className={styles.linkAbout}>
          About
        </Link>
        <Link ref={skillsRef} id='text' href='#' className={styles.linkSkills}>
          Skills
        </Link>
        <Link
          ref={contactRef}
          id='text'
          href='#'
          className={styles.linkContact}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
