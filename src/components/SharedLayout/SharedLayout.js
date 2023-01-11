import { Outlet } from 'react-router-dom';
import { TbHome, TbMovie } from 'react-icons/tb';
import { WrapperBox, Box, Navigation, NavItem } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <WrapperBox>
      <header>
        <Box>
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
        </Box>
      </header>
      <Outlet />
    </WrapperBox>
  );
};
