import style from './style.min.module.css';

const ScoreBoard = () => {
  return (
    <section id={style.socre_board}>
      <div>
        <span>Pontuação: </span>
        <span>00:00</span>
      </div>
      <div>
        <button type='button'>Iniciar novo jogo</button>
      </div>
    </section>
  )
};

export default ScoreBoard;