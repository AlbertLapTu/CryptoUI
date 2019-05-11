import React from 'react';
import styled from 'styled-components';
import megaphone from '../../../../../Assets/Icons/Speaker/Outline.png';
import settingImage from '../../../../../Assets/Icons/Setting/Outline.png';
import questionmark from '../../../../../Assets/Icons/Question/Outline.png';

const IconStyles = styled.img`
  height: 20px;
  width: 20px;
`;

const Account = () => {
  return (
    <React.Fragment>
      <div>Account</div>
      <div>
        <IconStyles src={megaphone} />
        Notifications
      </div>
      <div>
        <IconStyles src={settingImage} />
        Settings
      </div>
      <div>
        <IconStyles src={questionmark} />
        FAQ
      </div>
    </React.Fragment>
  );
};

export default Account;
