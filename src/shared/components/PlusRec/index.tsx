import Link from 'next/link';
import Button from '../buttons/Button';
import style from './style.min.module.css';

const PlusRec = () => {
  return (
    <div className={style.plus_rec}>
      <Button>
        <Link
          href={'https://portfolio-frontend-eliel-silva.vercel.app/'}
          target="_blank"
        >
          + jogos
        </Link>
      </Button>
    </div>
  );
};
export default PlusRec;
