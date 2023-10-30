import './Breadcrumb.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Breeadcrumb() {
  const nameSearch = useSelector((state) => state.products.nameSearch);
  const location = useLocation();

  return (
    <div className="breadcrumb container">
      <ol>
        <li>
          <Link to='/' >
            Inicio
          </Link>
        </li>
        {location.pathname.includes('/items/') && nameSearch &&
          <li>
            <Link to={`/items?q=${nameSearch}`} >
              {nameSearch}
            </Link>
          </li>
        }
      </ol>
    </div>
  )
}

export default Breeadcrumb;
