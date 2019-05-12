import React from 'react';
import c from '../../../../../Assets/c.svg';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

const LogoName = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  color: #fff;
  letter-spacing: normal;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Line = styled.hr`
  width: 175px;
  height: 1px;
  opacity: 0.3;
  border: solid 0.2px #f8f9fb;
`;

const Logo = () => {
  return (
    <React.Fragment>
      <LogoContainer>
        <LogoImage src={c} />
        <LogoName>CRYPTO UI</LogoName>
      </LogoContainer>
      <Line />
    </React.Fragment>
  );
};

export default Logo;
