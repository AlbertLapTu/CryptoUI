import React from 'react';
import styled from 'styled-components';
import MainSideBar from './components/SideMenu/sideMenuComponents/MainSideBar.jsx';
import TopHeader from './components/Header/TopHeader.jsx';
import Card from './components/CardHolder/Card.jsx';

//TODO: Wrap entire app with general global styles to have components fall in line
const GlobalStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: Oxygen;
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle>
        <MainSideBar />
        <TopHeader />
        <Card />
        <Card />
        <Card />
      </GlobalStyle>
    </React.Fragment>
  );
};

export default App;
