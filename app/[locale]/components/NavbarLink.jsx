import { useState } from 'react';
import styles from './Navbar.module.css';

const TitleWithRedLine = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const spreadLineStyle = {
    position: 'absolute',
    bottom: '-2px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: isHovered ? '100%' : '0%',
    height: '2px',
    backgroundColor: 'red',
    transition: 'width 0.3s',
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.container}
    >
      <a>{text}</a>
      <div>
        <div style={spreadLineStyle}></div>
      </div>
    </div>
  );
};

export default TitleWithRedLine;
