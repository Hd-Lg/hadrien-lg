'use client';
import styles from './Skills.module.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const firstCardRef = useRef();
  const secondCardRef = useRef();
  const thirdCardRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
        end: 'top 10%',
        scrub: 4,
      },
    });
    tl.fromTo(firstCardRef, { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <section ref={contentRef} className={styles.container}>
      <div ref={firstCardRef} className={styles.card}>
        <h3 className={styles.title}>Web Development`</h3>
        <div className={styles.text}>
          <h4 className={styles.secondaryTitle}>I can make cool website</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            labore doloremque numquam esse magnam possimus nobis, voluptatibus
            temporibus similique vero? Quos perferendis illo eaque culpa
            voluptatibus obcaecati amet dolor. Veniam?
          </p>
        </div>
      </div>
      <div ref={secondCardRef} className={styles.card}>
        <h3>App Development`</h3>
        <div>
          <h4>I can make cool website</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            labore doloremque numquam esse magnam possimus nobis, voluptatibus
            temporibus similique vero? Quos perferendis illo eaque culpa
            voluptatibus obcaecati amet dolor. Veniam?
          </p>
        </div>
      </div>
      <div ref={thirdCardRef} className={styles.card}>
        <h3>3D Modelling</h3>
        <div>
          <h4>I can make cool website</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            labore doloremque numquam esse magnam possimus nobis, voluptatibus
            temporibus similique vero? Quos perferendis illo eaque culpa
            voluptatibus obcaecati amet dolor. Veniam?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
