import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bg from 'img/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg';

export const Wrapper = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${p => p.theme.sizes.h.full};

  background-image: linear-gradient(${p => p.theme.colors.homeBg}, ${p => p.theme.colors.homeBg}),
    url('${bg}');

  svg {
    display: none;
  }

  @media screen and (min-width: 768px) {
    svg {
      display: block;
      margin-left: auto;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-evenly;

  background-color: ${p => p.theme.colors.navBg};
  padding: ${p => p.theme.space[1]}px;
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[5]}px;
  text-decoration: none;
  cursor: pointer;
  transition: color 250ms linear;

  :last-child {
    margin-left: ${p => p.theme.space[3]}px;
  }

  &.active {
    color: ${p => p.theme.colors.active};
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }

  @media screen and (min-width: 400px) {
    font-size: ${p => p.theme.fontSizes[6]}px;
  }
`;
