'use client';
import styles from './Navbar.module.css';
import NavbarLink from './NavbarLink';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next-intl/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleLinkClick = ({ link }) => {
    scroll.scrollTo(link, {
      smooth: true,
    });
  };

  useEffect(() => {
    gsap.to(homeRef.current, {
      x: -200,
      opacity: 1,
      duration: 2,
    });

    gsap.to(aboutRef.current, {
      x: -100,
      opacity: 1,
      duration: 2,
    });

    gsap.to(skillsRef.current, {
      x: 0,
      opacity: 1,
      duration: 2,
    });

    gsap.to(projectsRef.current, {
      x: 100,
      opacity: 1,
      duration: 2,
    });

    gsap.to(contactRef.current, {
      x: 200,
      opacity: 1,
      duration: 2,
    });
  }, []);
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link ref={homeRef} href='#home' passHref className={styles.linkHome}>
          <ScrollLink to='home' smooth={true} onClick={handleLinkClick('home')}>
            <NavbarLink text={'Home'} />
          </ScrollLink>
        </Link>

        <Link ref={aboutRef} href='#about' className={styles.linkAbout}>
          <ScrollLink
            to='about'
            smooth={true}
            onClick={handleLinkClick('about')}
          >
            <NavbarLink text={'About'} />
          </ScrollLink>
        </Link>

        <Link ref={skillsRef} href='#skills' className={styles.linkSkills}>
          <ScrollLink
            to='skills'
            smooth={true}
            onClick={handleLinkClick('skills')}
          >
            <NavbarLink text={'Skills'} />
          </ScrollLink>
        </Link>

        <Link ref={projectsRef} href='#projects' className={styles.linkSkills}>
          <ScrollLink
            to='projects'
            smooth={true}
            onClick={handleLinkClick('projects')}
          >
            <NavbarLink text={'Projects'} />
          </ScrollLink>
        </Link>

        <Link ref={contactRef} href='#contact' className={styles.linkContact}>
          <ScrollLink
            to='contact'
            smooth={true}
            onClick={handleLinkClick('contact')}
          >
            <NavbarLink text={'Contact'} />
          </ScrollLink>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
