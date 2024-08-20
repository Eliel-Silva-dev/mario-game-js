'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  // class jump: page_jump__Ry29I
  const mario = useRef({} as HTMLImageElement);
  const pipe = useRef({} as HTMLImageElement);
  const gameBoard = useRef({} as HTMLDivElement);

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

  useEffect(() => {
    document.addEventListener('keydown', jumpArrowup);

    document.addEventListener('click', jumpClickMouse);

    const gameOver = () => {
      const marioTop = +getComputedStyle(mario.current).bottom.replace(
        'px',
        '',
      );
      const pipeLeft = pipe.current.offsetLeft;

      if (pipeLeft < 120 && pipeLeft > 20 && marioTop < 110) {
        pipe.current.style.animation = 'none';
        pipe.current.style.left = `${pipeLeft}px`;

        mario.current.style.bottom = `${marioTop}px`;

        document.removeEventListener('keydown', jumpArrowup);

        document.removeEventListener('click', jumpClickMouse);

        clearInterval(loopMario);
      }
    };

    const loopMario = setInterval(() => {
      gameOver();
    }, 10);
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
