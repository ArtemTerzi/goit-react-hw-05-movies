import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavList, Navlink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <Navlink to="/"> Home</Navlink>
            </li>
            <li>
              <Navlink to="/movies"> Movies</Navlink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
