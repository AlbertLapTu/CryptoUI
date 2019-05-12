import React from 'react';
import styled from 'styled-components';
import megaphone from '../../../../../Assets/Icons/Speaker/Outline.png';
import settingImage from '../../../../../Assets/Icons/Setting/Outline.png';
import questionmark from '../../../../../Assets/Icons/Question/Outline.png';

const IconStyles = styled.img`
  height: 20px;
  width: 20px;
  padding-right: 8px;
`;

const AccountTitleStyle = styled.span`
  display: flex;
  align-items: center;
  flex-direction: flex-start;
  padding: 6px 21px 13px 23px;
`;

const AccountContainer = styled.ul`
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

const Account = () => {
  return (
    <React.Fragment>
      <AccountTitleStyle>Account</AccountTitleStyle>
      <AccountContainer>
        <ListItemStyle>
          <IconStyles src={megaphone} />
          <span>Notifications</span>
        </ListItemStyle>
        <ListItemStyle>
          <IconStyles src={settingImage} />
          <span>Settings</span>
        </ListItemStyle>
        <ListItemStyle>
          <IconStyles src={questionmark} />
          <span>FAQ</span>
        </ListItemStyle>
      </AccountContainer>
    </React.Fragment>
  );
};

export default Account;
