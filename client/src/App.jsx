import React from 'react';
import MainSideBar from './components/SideMenu/sideMenuComponents/MainSideBar.jsx';
import TopHeader from './components/Header/TopHeader.jsx';
import styled from 'styled-components';

//TODO: Wrap entire app with general global styles to have components fall in line
const GlobalStyle = styled.div`
  display: inline;
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle>
        <TopHeader />
        <MainSideBar />
      </GlobalStyle>
    </React.Fragment>
  );
};

export default App;
