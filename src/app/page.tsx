'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  // class jump: page_jump__Ry29I
  const mario = useRef({} as HTMLImageElement);
  useEffect(() => {
    const loopMario = setInterval(() => {
      const marioAltura = getComputedStyle(mario.current);
      console.log(marioAltura.bottom);

    }, 1000);
  }, []);

  return (
    <main id={styles.main_home}>
      <div className={styles.game_board}>
        <img
          id={styles.mario}
          className={styles.jump}
          src="img/mario.gif"
          alt="mario"
          ref={mario}
        />
        <img id={styles.pipe} src="img/pipe.png" alt="tubo" />
        <img id={styles.clounds} src="img/clouds.png" alt="nuvens" />
      </div>
      <div className={styles.parede}></div>
    </main>
  );
}
