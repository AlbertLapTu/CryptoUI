import React from 'react';
import styled from 'styled-components';
import bankLogo from '../../../../../Assets/Icons/Bank/Outline.png';
import giftLogo from '../../../../../Assets/Icons/Gift/Outline.png';
import utilityLogo from '../../../../../Assets/Icons/Lightbulb/Outline.png';

const IconStyles = styled.img`
  height: 20px;
  width: 20px;
`;

const Service = () => {
  return (
    <React.Fragment>
      <div>
        <IconStyles src={bankLogo} />
        Transactions
        <div>Buy & sell coin</div>
        <div>Deposit USD</div>
        <div>Withdraw USD</div>
        <div>Send Coin</div>
        <div>Receive Coin</div>
        <div>Deposit Coin</div>
      </div>
      <div>
        <IconStyles src={giftLogo} />
        Rewards
      </div>
      <div>
        <IconStyles src={utilityLogo} />
        Utility Plan
      </div>
    </React.Fragment>
  );
};

export default Service;
