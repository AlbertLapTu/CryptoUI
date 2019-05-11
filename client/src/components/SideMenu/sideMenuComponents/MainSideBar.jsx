import React from 'react';
import SideMenuStyle from '../styles/SideMenuStyles.jsx';
import Logo from '../sideMenuComponents/Logo.jsx';
import QuickAccess from './QuickAccess.jsx';
import Services from './Services.jsx';
import Account from './Account.jsx';

const MainSideBar = () => {
  return (
    <SideMenuStyle>
      <Logo />
      <QuickAccess />
      <Services />
      <Account />
    </SideMenuStyle>
  );
};

export default MainSideBar;
