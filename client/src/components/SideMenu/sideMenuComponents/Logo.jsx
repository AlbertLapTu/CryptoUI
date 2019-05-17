import React from 'react';
import c from '../../../../../Assets/c.svg';
import * as styled from '../styles/LogoStyles.jsx';

const Logo = () => {
  return (
    <React.Fragment>
      <styled.LogoContainer>
        <styled.LogoImage src={c} />
        <styled.LogoName>CRYPTO UI</styled.LogoName>
      </styled.LogoContainer>
      <styled.Line />
    </React.Fragment>
  );
};

export default Logo;
