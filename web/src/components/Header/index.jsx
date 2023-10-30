import Input from '../Input';
import logo from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useState } from 'react';

function Header() {
  const [valueInput, setValueInput] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/items?q=${valueInput}`);
  }

  return (
    <>
      <header className='header'>
        <div className='header__container container'>
          <Link to='/' >
            <figure className='header__image'>
              <img
                src={logo}
                alt="logo mercado libre"
                width='50px'
                height='50px'
                />
            </figure>
          </Link>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder='Nunca dejes de buscar'
              eventEmit={ setValueInput }
            />
          </form>
        </div>
      </header>
    </>
  )
}

export default Header;