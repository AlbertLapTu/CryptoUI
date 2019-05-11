import React from 'react';
import styled from 'styled-components';
import homeIcon from '../../../../../Assets/fill.svg';
import exchange from '../../../../../Assets/exchange.svg';
import wallet from '../../../../../Assets/Icons/Wallet/outline.png';
import tradeView from '../../../../../Assets/Icons/TradeView/Outline.png';

//TODO: Fix container style
const QuickAccessContainer = styled.div`
  display: inline-block;
`;

const QuickAccessTitleStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 20px;
`;

const IconStyles = styled.img`
  height: 20px;
  width: 20px;
`;

const QuickAccess = () => {
  return (
    <React.Fragment>
      <QuickAccessTitleStyle>Quick Access</QuickAccessTitleStyle>
      <QuickAccessContainer>
        <div>
          <IconStyles src={homeIcon} />
          Dashboard
        </div>
        <div>
          <IconStyles src={exchange} />
          Exchange
        </div>
        <div>
          <IconStyles src={wallet} />
          My Wallet
        </div>
        <div>
          <IconStyles src={tradeView} />
          Trade View
        </div>
      </QuickAccessContainer>
    </React.Fragment>
  );
};

export default QuickAccess;
