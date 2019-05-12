import React from 'react';
import styled from 'styled-components';
import TopHeaderStyle from './styles/TopHeaderStyles.jsx';
import burgerMenu from '../../../../Assets/burger.svg';
import box from '../../../../Assets/box.svg';
import searchIcon from '../../../../Assets/search.svg';
import settingsIcon from '../../../../Assets/Icons/Setting/Outline.png';
import megaPhone from '../../../../Assets/Icons/Speaker/Outline.png';
import countryIcon from '../../../../Assets/us.svg';

const TopHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const IconStyles = styled.img`
  height: 20px;
  width: 20px;
`;

const Input = styled.input.attrs({
  type: 'text'
})`
  width: 100%;
  border-radius: 15px;
  background-color: #f8f9fb;
  display: block;
`;

const ImageTile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 17px;
  background-color: grey;
`;

const TopHeaderSectionOne = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-around;
`;

const TopHeaderSectionTwo = styled.div`
  width: 40%;
`;

const TopHeaderSectionThree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;
`;

//TODO: Add search icon within the input text field
//      Line up the top bar and nav bar equally
const TopHeader = () => {
  return (
    <React.Fragment>
      <TopHeaderStyle>
        <TopHeaderContainer>
          <TopHeaderSectionOne>
            <IconStyles src={burgerMenu} />
            <IconStyles src={box} />
            <IconStyles src={searchIcon} />
          </TopHeaderSectionOne>
          <TopHeaderSectionTwo>
            <label htmlFor='cryptocurrency-search-bar' />
            <Input placeholder='Type any cryptocurrency...' />
          </TopHeaderSectionTwo>
          <TopHeaderSectionThree>
            <ImageTile />
            <IconStyles src={settingsIcon} />
            <IconStyles src={megaPhone} />
            <IconStyles src={countryIcon} />
          </TopHeaderSectionThree>
        </TopHeaderContainer>
      </TopHeaderStyle>
    </React.Fragment>
  );
};

export default TopHeader;
