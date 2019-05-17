import React from 'react';
import megaphone from '../../../../../Assets/Icons/Speaker/Outline.png';
import settingImage from '../../../../../Assets/Icons/Setting/Outline.png';
import questionmark from '../../../../../Assets/Icons/Question/Outline.png';
import * as styled from '../styles/AccountStyles.jsx';

const Account = () => {
  return (
    <React.Fragment>
      <styled.AccountTitleStyle>Account</styled.AccountTitleStyle>
      <styled.AccountContainer>
        <styled.ListItemStyle>
          <styled.IconStyles src={megaphone} />
          <span>Notifications</span>
        </styled.ListItemStyle>
        <styled.ListItemStyle>
          <styled.IconStyles src={settingImage} />
          <span>Settings</span>
        </styled.ListItemStyle>
        <styled.ListItemStyle>
          <styled.IconStyles src={questionmark} />
          <span>FAQ</span>
        </styled.ListItemStyle>
      </styled.AccountContainer>
    </React.Fragment>
  );
};

export default Account;
