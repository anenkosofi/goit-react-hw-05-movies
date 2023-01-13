import { Outlet } from 'react-router-dom';
import { TbHome, TbMovie } from 'react-icons/tb';
import { Appbar, Container, Navigation, NavItem } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Appbar>
        <Container>
          <Navigation>
            <NavItem to="/">
              <TbHome size={24} />
              <span>Home</span>
            </NavItem>
            <NavItem to="movies">
              <TbMovie size={24} />
              <span>Movies</span>
            </NavItem>
          </Navigation>
        </Container>
      </Appbar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
