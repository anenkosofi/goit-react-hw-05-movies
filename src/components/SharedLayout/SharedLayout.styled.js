import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const WrapperBox = styled.div`
  display: flex;
`;

const Box = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;

  width: 120px;
  margin: 0;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;

  padding-top: 8px;
  padding-bottom: 8px;

  text-transform: capitalize;
`;

export { WrapperBox, Box, Navigation, NavItem };
