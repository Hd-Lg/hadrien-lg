'use client';
import styles from './About.module.css';
import Image from 'next/image';
import PixelMe from '@/public/pixel_face.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    // Animation image
    gsap.fromTo(
      imageRef.current,
      {
        x: -400,
        fontSize: 0,
        opacity: 0,
      },
      {
        x: 0,
        fontSize: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 4,
          start: 'top 80%',
          end: 'top 10%',
          markers: true,
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      {
        x: 400,
        fontSize: 10,
      },
      {
        x: 0,
        fontSize: 80,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 4,
          start: 'top 80%',
          end: 'top 10%',
        },
      }
    );

    // Animation text
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 4,
          start: 'top 80%',
          end: 'top 10%',
        },
      }
    );
  }, []);

  return (
    <section id='about' ref={sectionRef} className={styles.aboutSection}>
      <Image
        ref={imageRef}
        src={PixelMe}
        alt='Pixel picture of Hadrien L'
        className={styles.img}
      />
      <div className={styles.aboutText}>
        <h2 ref={titleRef} className={styles.title}>
          About Me
        </h2>
        <div ref={textRef}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dicta perspiciatis, voluptate ullam enim assumenda cupiditate
            aliquid libero, repellat qui in. Dolor atque a nemo. Nostrum saepe
            commodi tempora soluta rem, ullam accusamus similique dolorum
            maiores vitae ad, unde et tempore ut officiis veritatis molestias.
            Alias veniam sequi non iusto ex consequatur laudantium soluta
            necessitatibus quas saepe sit maiores fuga libero eos blanditiis
            dolore quidem perferendis explicabo, rem quibusdam voluptatum qui
            eligendi, nesciunt quo? Incidunt, eos. Nam officiis possimus
            nostrum, omnis vel facere dolore ipsam laboriosam reiciendis? Minus,
            harum atque voluptas velit dolorum excepturi ducimus, est natus
            quis, sunt maxime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
