'use client';
import styles from './Navbar.module.css';
import NavbarLink from './NavbarLink';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleLinkClick = ({ link }) => {
    scroll.scrollTo(link, {
      smooth: true,
    });
  };

  useEffect(() => {
    /**
     * GSAP ANIMATIONS
     */
    // LINKS
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

    // NAVBAR
    const navbarHeight = navbarRef.current.offsetHeight;

    gsap.to(navbarRef.current, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 999,
      scrollTrigger: {
        trigger: navbarRef.current,
        start: 'top top',
        end: `+=${navbarHeight}`,
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);
  return (
    <nav ref={navbarRef} className={styles.navbar}>
      <div className={styles.links}>
        <div ref={homeRef} className={styles.linkHome}>
          <ScrollLink to='home' smooth={true} onClick={handleLinkClick('home')}>
            <NavbarLink text={'Home'} />
          </ScrollLink>
        </div>

        <div ref={aboutRef} className={styles.linkAbout}>
          <ScrollLink
            to='about'
            smooth={true}
            onClick={handleLinkClick('about')}
          >
            <NavbarLink text={'About'} />
          </ScrollLink>
        </div>

        <div ref={skillsRef} className={styles.linkSkills}>
          <ScrollLink
            to='skills'
            smooth={true}
            onClick={handleLinkClick('skills')}
          >
            <NavbarLink text={'Skills'} />
          </ScrollLink>
        </div>

        <div ref={projectsRef} className={styles.linkSkills}>
          <ScrollLink
            to='projects'
            smooth={true}
            onClick={handleLinkClick('projects')}
          >
            <NavbarLink text={'Projects'} />
          </ScrollLink>
        </div>

        <div ref={contactRef} className={styles.linkContact}>
          <ScrollLink
            to='contact'
            smooth={true}
            onClick={handleLinkClick('contact')}
          >
            <NavbarLink text={'Contact'} />
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
