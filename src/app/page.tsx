'use client';

import { useRef, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const mario = useRef({} as HTMLImageElement);
  const pipe = useRef({} as HTMLImageElement);
  const clouds = useRef({} as HTMLImageElement);
  const gameBoard = useRef({} as HTMLDivElement);
  const boxPlay = useRef({} as HTMLDivElement);
  const loopId = useRef<NodeJS.Timeout>();
  const [score, setScore] = useState<number>(0);

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

  const incrementScore = () => {
    setScore((oldScore) => {
      return oldScore + 10;
    });
  };
  const gameOver = (marioTop: number) => {
    clearInterval(loopId.current);

    document.removeEventListener('keydown', jumpArrowup);

    document.removeEventListener('click', jumpClickMouse);

    clouds.current.classList.remove('page_animaClouds__GRyvg');
    pipe.current.classList.remove('page_animaPipe__vfR2_');

    mario.current.style.bottom = `${marioTop}px`;
    clouds.current.style.right = '-500px';
    pipe.current.style.right = '-200px';

    boxPlay.current.style.display = 'flex';
  };

  const play = () => {
    pipe.current.classList.add('page_animaPipe__vfR2_');
    clouds.current.classList.add('page_animaClouds__GRyvg');
    boxPlay.current.style.display = 'none';
    mario.current.style.bottom = '0';

    setScore(0);

    document.addEventListener('keydown', jumpArrowup);

    document.addEventListener('click', jumpClickMouse);

    loopId.current = setInterval(() => {
      const marioTop = +getComputedStyle(mario.current).bottom.replace(
        'px',
        '',
      );

      const pipeLeft = pipe.current.offsetLeft;
      if (pipeLeft < 120 && pipeLeft > 20 && marioTop < 110) {
        gameOver(marioTop);
        return;
      }
      if (marioTop > 195) {
        incrementScore();
      }
    }, 10);
  };

  return (
    <main id={styles.main_home}>
      <div ref={gameBoard} className={styles.game_board}>
        <div id={styles.boxScore}>
          <h2>
            Score: <span className={styles.score}>{score ? score : '00'}</span>
          </h2>
        </div>
        <img id={styles.mario} src="img/mario.gif" alt="mario" ref={mario} />
        <img ref={pipe} id={styles.pipe} src="img/pipe.png" alt="tubo" />
        <img
          ref={clouds}
          id={styles.clounds}
          src="img/clouds.png"
          alt="nuvens"
        />
        <div ref={boxPlay} id={styles.play}>
          <div>
            <h2>
              Pontuação:{' '}
              <span className={styles.score}>{score ? score : '00'}</span>
            </h2>
            <h2>
              Tempo: <span className={styles.score}>00:00</span>
            </h2>
          </div>
          <button onClick={play} type="button">
            Novo jogo
          </button>
        </div>
      </div>
      <div className={styles.parede}></div>
    </main>
  );
}
