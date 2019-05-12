import React from 'react';
import styled from 'styled-components';
import bankLogo from '../../../../../Assets/Icons/Bank/Outline.png';
import giftLogo from '../../../../../Assets/Icons/Gift/Outline.png';
import utilityLogo from '../../../../../Assets/Icons/Lightbulb/Outline.png';

const IconStyles = styled.img`
  height: 20px;
  width: 20px;
  padding-right: 8px;
`;

const ServiceContainer = styled.ul`
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

const ServicesTitleStyle = styled.span`
  display: flex;
  align-items: center;
  flex-direction: flex-start;
  padding: 6px 21px 13px 23px;
`;

const Service = () => {
  return (
    <React.Fragment>
      <ServicesTitleStyle>Services</ServicesTitleStyle>
      <ServiceContainer>
        <ListItemStyle>
          <IconStyles src={bankLogo} />
          <span>Transactions</span>
        </ListItemStyle>
        <ListItemStyle>
          <IconStyles src={giftLogo} />
          <span>Rewards</span>
        </ListItemStyle>
        <ListItemStyle>
          <IconStyles src={utilityLogo} />
          <span>Utility Plan</span>
        </ListItemStyle>
      </ServiceContainer>
    </React.Fragment>
  );
};

export default Service;

// <div>
//         <IconStyles src={bankLogo} />
//         Transactions
//         <div>Buy & sell coin</div>
//         <div>Deposit USD</div>
//         <div>Withdraw USD</div>
//         <div>Send Coin</div>
//         <div>Receive Coin</div>
//         <div>Deposit Coin</div>
//       </div>
//       <div>
//         <IconStyles src={giftLogo} />
//         Rewards
//       </div>
//       <div>
//         <IconStyles src={utilityLogo} />
//         Utility Plan
//       </div>
