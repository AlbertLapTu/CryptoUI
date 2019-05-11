import React from 'react';
import styled from 'styled-components';
import homeIcon from '../../../../../Assets/fill.svg';
import exchange from '../../../../../Assets/exchange.svg';
import wallet from '../../../../../Assets/Icons/Wallet/outline.png';
import tradeView from '../../../../../Assets/Icons/TradeView/Outline.png';

const quickAccessContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const quickAccessTitleStyle = styled.div`
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
      <quickAccessTitleStyle>Quick Access</quickAccessTitleStyle>
      <quickAccessContainer>
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
      </quickAccessContainer>
    </React.Fragment>
  );
};

export default QuickAccess;
