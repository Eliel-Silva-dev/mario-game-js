'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const mario = useRef({} as HTMLImageElement);
  const pipe = useRef({} as HTMLImageElement);
  const clouds = useRef({} as HTMLImageElement);
  const gameBoard = useRef({} as HTMLDivElement);
  const boxPlay = useRef({} as HTMLDivElement);
  const loopId = useRef<NodeJS.Timeout>();

  const jumpArrowup = (e: KeyboardEvent) => {
    if (e.key == 'ArrowUp') {
      mario.current.classList.add('page_jump__Ry29I');

      setTimeout(() => {
        mario.current.classList.remove('page_jump__Ry29I');
      }, 500);
    }
  };

  const jumpClickMouse = () => {
    mario.current.classList.add('page_jump__Ry29I');

    setTimeout(() => {
      mario.current.classList.remove('page_jump__Ry29I');
    }, 600);
  };

  const play = () => {
    pipe.current.classList.add('page_animaPipe__vfR2_');
    clouds.current.classList.add('page_animaClouds__GRyvg');
    boxPlay.current.style.display = 'none';
    mario.current.style.bottom = '0';

    document.addEventListener('keydown', jumpArrowup);

    document.addEventListener('click', jumpClickMouse);
  };

  const gameOver = () => {
    const marioTop = +getComputedStyle(mario.current).bottom.replace('px', '');
    const pipeLeft = pipe.current.offsetLeft;

    if (pipeLeft < 120 && pipeLeft > 20 && marioTop < 110) {
      document.removeEventListener('keydown', jumpArrowup);

      document.removeEventListener('click', jumpClickMouse);

      clouds.current.classList.remove('page_animaClouds__GRyvg');
      pipe.current.classList.remove('page_animaPipe__vfR2_');

      mario.current.style.bottom = `${marioTop}px`;
      clouds.current.style.right = '-500px';
      pipe.current.style.right = '-200px';

      boxPlay.current.style.display = 'flex';

      clearInterval(loopId.current);
    }

    loopId.current = setInterval(() => {
      gameOver();
    }, 50);
  };

  useEffect(() => {
    gameOver();
  }, []);

  return (
    <main id={styles.main_home}>
      <div ref={gameBoard} className={styles.game_board}>
        <img id={styles.mario} src="img/mario.gif" alt="mario" ref={mario} />
        <img ref={pipe} id={styles.pipe} src="img/pipe.png" alt="tubo" />
        <img
          ref={clouds}
          id={styles.clounds}
          src="img/clouds.png"
          alt="nuvens"
        />
        <div ref={boxPlay} id={styles.play}>
          <button onClick={play} type="button">
            Play
          </button>
        </div>
      </div>
      <div className={styles.parede}></div>
    </main>
  );
}
