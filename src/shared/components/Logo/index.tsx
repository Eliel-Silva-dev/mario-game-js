import Link from 'next/link';
import style from './style.min.module.css';
import { FaOdysee } from 'react-icons/fa6';

const Logo = () => {
  return (
    <div id={style.logo_title}>
      <FaOdysee />
      <h2>
        <Link href={'/'}>Mário-js</Link>
      </h2>
    </div>
  );
};

export default Logo;
