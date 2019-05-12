import React from 'react';
import styled from 'styled-components';
import homeIcon from '../../../../../Assets/fill.svg';
import exchange from '../../../../../Assets/exchange.svg';
import wallet from '../../../../../Assets/Icons/Wallet/outline.png';
import tradeView from '../../../../../Assets/Icons/TradeView/Outline.png';
import rightArrow from '../../../../../Assets/Icons/Arrows/Right.png';

const QuickAccessContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-start;
  padding-left: 23px;
`;

const ListItemStyle = styled.li`
  list-style: none;
  padding-top: 5px;
`;

const QuickAccessTitleStyle = styled.span`
  display: flex;
  align-items: center;
  flex-direction: flex-start;
  padding: 6px 21px 13px 23px;
`;

const IconStyles = styled.img`
  height: 20px;
  width: 20px;
  padding-right: 8px;
`;

//TODO: Fix arrow for trade view
//      Container doesn't work.
const QuickAccess = () => {
  return (
    <React.Fragment>
      <QuickAccessTitleStyle>Quick Access</QuickAccessTitleStyle>
      <QuickAccessContainer>
        <ListItemStyle>
          <IconStyles src={homeIcon} />
          <span>Dashboard</span>
        </ListItemStyle>
        <ListItemStyle>
          <IconStyles src={exchange} />
          <span>Exchange</span>
        </ListItemStyle>
        <ListItemStyle>
          <IconStyles src={wallet} />
          <span>My Wallet</span>
        </ListItemStyle>
        <ListItemStyle>
          <IconStyles src={tradeView} />
          <span>Trade View</span>
          <IconStyles src={rightArrow} />
        </ListItemStyle>
      </QuickAccessContainer>
    </React.Fragment>
  );
};

export default QuickAccess;
