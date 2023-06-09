import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
      <div>
        <h2>Projects</h2>
        <p>
          Have a look at some of my projects to get an idea of what I can do.
        </p>
      </div>
      {/* PROJECTS */}
      <div>
        {/* PINNED PROJECTS */}
        <div></div>
        {/* OTHER PROJECTS */}
      </div>
    </section>
  );
};

export default Projects;
