import React from 'react';
import burgerMenu from '../../../../Assets/burger.svg';
import box from '../../../../Assets/box.svg';
import searchIcon from '../../../../Assets/search.svg';
import settingsIcon from '../../../../Assets/Icons/Setting/Outline.png';
import megaPhone from '../../../../Assets/Icons/Speaker/Outline.png';
import countryIcon from '../../../../Assets/us.svg';
import * as styled from './styles/TopHeaderStyles.jsx';

//TODO: Add search icon within the input text field
//      Line up the top bar and nav bar equally
const TopHeader = () => {
  return (
    <React.Fragment>
      <styled.TopHeaderStyle>
        <styled.TopHeaderContainer>
          <styled.TopHeaderSectionOne>
            <styled.IconStyles src={burgerMenu} />
            <styled.IconStyles src={box} />
            <styled.IconStyles src={searchIcon} />
          </styled.TopHeaderSectionOne>
          <styled.TopHeaderSectionTwo>
            <label htmlFor='cryptocurrency-search-bar' />
            <styled.Input placeholder='Type any cryptocurrency...' />
          </styled.TopHeaderSectionTwo>
          <styled.TopHeaderSectionThree>
            <styled.ImageTile />
            <styled.IconStyles src={settingsIcon} />
            <styled.IconStyles src={megaPhone} />
            <styled.IconStyles src={countryIcon} />
          </styled.TopHeaderSectionThree>
        </styled.TopHeaderContainer>
      </styled.TopHeaderStyle>
    </React.Fragment>
  );
};

export default TopHeader;
