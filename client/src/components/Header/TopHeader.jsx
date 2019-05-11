import React from 'react';
import styled from 'styled-components';
import TopHeaderStyle from './styles/TopHeaderStyles.jsx';
import burgerMenu from '../../../../Assets/burger.svg';
import box from '../../../../Assets/box.svg';
import searchIcon from '../../../../Assets/search.svg';
import settingsIcon from '../../../../Assets/Icons/Setting/Outline.png';
import megaPhone from '../../../../Assets/Icons/Speaker/Outline.png';

const TopHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const IconStyles = styled.img`
  height: 20px;
  width: 20px;
`;

const Input = styled.input.attrs({
  type: 'text'
})`
  width: 50%;
  border-radius: 15px;
  background-color: #f8f9fb;
  display: block;
  margin: 0 0 1em;
`;

const ImageTile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 17px;
  background-color: grey;
`;

//TODO: Add search icon within the input text field
//      Line up the top bar and nav bar equally
const TopHeader = () => {
  return (
    <React.Fragment>
      <TopHeaderStyle>
        <TopHeaderContainer>
          <IconStyles src={burgerMenu} />
          <IconStyles src={box} />
          <IconStyles src={searchIcon} />
          <label htmlFor='cryptocurrency-search-bar' />
          <Input placeholder='Type any cryptocurrency...' />
          <ImageTile />
          <IconStyles src={settingsIcon} />
          <IconStyles src={megaPhone} />
        </TopHeaderContainer>
      </TopHeaderStyle>
    </React.Fragment>
  );
};

export default TopHeader;
