import {FC} from 'react';
import logo from '../../assets/react.svg';

type Props = {
    title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <header className='flex items-center bg-blue-500 text-white p-4 shadow-md'>
        <img src={logo} alt="logo" className='h-10 w-10'/>
        <h1 className='text-2xl'>{title}</h1>
    </header>
  );
}

export default Header;