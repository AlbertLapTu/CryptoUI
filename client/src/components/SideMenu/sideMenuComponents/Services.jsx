import React from 'react';
import bankLogo from '../../../../../Assets/Icons/Bank/Outline.png';
import giftLogo from '../../../../../Assets/Icons/Gift/Outline.png';
import rightArrow from '../../../../../Assets/Icons/Arrows/Right.png';
import utilityLogo from '../../../../../Assets/Icons/Lightbulb/Outline.png';
import * as styled from '../styles/ServicesStyles.jsx';

const Service = () => {
  return (
    <React.Fragment>
      <styled.ServicesTitleStyle>Services</styled.ServicesTitleStyle>
      <styled.ServiceContainer>
        <styled.ListItemStyle>
          <styled.IconStyles src={bankLogo} />
          <span>Transactions</span>
          <styled.IconStyles src={rightArrow} />
        </styled.ListItemStyle>
        <styled.ListItemStyle>
          <styled.IconStyles src={giftLogo} />
          <span>Rewards</span>
          <styled.IconStyles src={rightArrow} />
        </styled.ListItemStyle>
        <styled.ListItemStyle>
          <styled.IconStyles src={utilityLogo} />
          <span>Utility Plan</span>
          <styled.IconStyles src={rightArrow} />
        </styled.ListItemStyle>
      </styled.ServiceContainer>
    </React.Fragment>
  );
};

export default Service;
