import { Link, Outlet } from 'react-router-dom';
import { TbHome, TbMovie } from 'react-icons/tb';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <TbHome size={16} />
            <span>Home</span>
          </Link>
          <Link to="movies">
            <TbMovie size={16} />
            <span>Movies</span>
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
