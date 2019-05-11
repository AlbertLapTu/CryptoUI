import React from 'react';
import SideMenuStyle from '../styles/SideMenuStyles.jsx';
import Logo from '../sideMenuComponents/Logo.jsx';
import QuickAccess from './QuickAccess.jsx';

const MainSideBar = () => {
  return (
    <SideMenuStyle>
      <Logo />
      <QuickAccess />
    </SideMenuStyle>
  );
};

export default MainSideBar;
