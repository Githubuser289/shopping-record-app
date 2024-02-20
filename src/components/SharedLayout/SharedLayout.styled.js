import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const hdrHghtPercent = 8;
let headerHeight =
  Math.floor((window.innerHeight * hdrHghtPercent) / 100).toString() + 'px';
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: ${headerHeight};
  // padding: 8px 0;
  background-color: var(--main-title-bkg);
  color: var(--main-title);
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  background-color: var(--menu-bkg);
`;
export const Link = styled(NavLink)`
  padding: 5px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--mainbtn-bkg);
  font-weight: 500;

  &.active {
    color: var(--mainbtn);
    background-color: var(--mainbtn-bkg);
  }
`;

// let navElemHeight = document.getElementsByTagName('nav')[0].offsetHeight;
// console.log(navElemHeight);  /**44 */
let backDivHeight =
  Math.floor(
    (window.innerHeight * (100 - hdrHghtPercent)) / 100 - 44
  ).toString() + 'px';
export const Box = styled.div`
  height: ${backDivHeight};
  background-color: var(--data-area-bkg);
`;
