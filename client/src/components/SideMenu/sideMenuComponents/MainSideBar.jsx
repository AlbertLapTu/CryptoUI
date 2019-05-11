import React from 'react';
import SideMenuStyle from '../styles/SideMenuStyles.jsx';
import Logo from '../sideMenuComponents/Logo.jsx';
import QuickAccess from './QuickAccess.jsx';
import Services from './Services.jsx';

const MainSideBar = () => {
  return (
    <SideMenuStyle>
      <Logo />
      <QuickAccess />
      <Services />
    </SideMenuStyle>
  );
};

export default MainSideBar;
