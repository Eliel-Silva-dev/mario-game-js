'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  // class jump: page_jump__Ry29I
  const mario = useRef({} as HTMLImageElement);
  const pipe = useRef({} as HTMLImageElement);
  const gameBoard = useRef({} as HTMLDivElement);

  useEffect(() => {
    const jumpArrowup = (e: KeyboardEvent) => {
      if (e.key == 'ArrowUp') {
        mario.current.classList.add('page_jump__Ry29I');

        setTimeout(() => {
          mario.current.classList.remove('page_jump__Ry29I');
        }, 600);
      }
    };

    const jumpClickMouse = () => {
      mario.current.classList.add('page_jump__Ry29I');

      setTimeout(() => {
        mario.current.classList.remove('page_jump__Ry29I');
      }, 600);
    };

    document.addEventListener('keydown', jumpArrowup);

    document.addEventListener('click', jumpClickMouse);

    const loopMario = setInterval(() => {
      const marioTop = getComputedStyle(mario.current).bottom.replace(
        'px',
        '',
      );
      const pipeLeft = getComputedStyle(mario.current).left.replace(
        'px',
        '',
      );
    }, 1000);
    //clearInterval(loopMario);
  }, []);

  return (
    <main id={styles.main_home}>
      <div ref={gameBoard} className={styles.game_board}>
        <img id={styles.mario} src="img/mario.gif" alt="mario" ref={mario} />
        <img ref={pipe} id={styles.pipe} src="img/pipe.png" alt="tubo" />
        <img id={styles.clounds} src="img/clouds.png" alt="nuvens" />
      </div>
      <div className={styles.parede}></div>
    </main>
  );
}
