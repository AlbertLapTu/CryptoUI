import React from 'react';
import homeIcon from '../../../../../Assets/fill.svg';
import exchange from '../../../../../Assets/exchange.svg';
import wallet from '../../../../../Assets/Icons/Wallet/outline.png';
import tradeView from '../../../../../Assets/Icons/TradeView/Outline.png';
import rightArrow from '../../../../../Assets/Icons/Arrows/Right.png';
import * as styled from '../styles/QuickAccessStyles.jsx';

//TODO: Fix arrow for trade view
//      Container doesn't work.
const QuickAccess = () => {
  return (
    <React.Fragment>
      <styled.QuickAccessTitleStyle>Quick Access</styled.QuickAccessTitleStyle>
      <styled.QuickAccessContainer>
        <styled.ListItemStyle>
          <styled.IconStyles src={homeIcon} />
          <span>Dashboard</span>
        </styled.ListItemStyle>
        <styled.ListItemStyle>
          <styled.IconStyles src={exchange} />
          <span>Exchange</span>
        </styled.ListItemStyle>
        <styled.ListItemStyle>
          <styled.MyWalletContainer>
            <styled.IconStyles src={wallet} />
            <span>My Wallet</span>
            <styled.IconStyles src={rightArrow} />
          </styled.MyWalletContainer>
        </styled.ListItemStyle>
        <styled.ListItemStyle>
          <styled.IconStyles src={tradeView} />
          <span>Trade View</span>
        </styled.ListItemStyle>
      </styled.QuickAccessContainer>
    </React.Fragment>
  );
};

export default QuickAccess;
