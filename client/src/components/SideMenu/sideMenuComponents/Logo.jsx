import React from 'react';
import c from '../../../../../Assets/c.svg';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 19px 163px 973px 22px;
  position: absolute;
`;

const LogoName = styled.div`
  font-size: 20px;
  color: #fff;
  width: 97px;
  height: 19px;
  letter-spacing: 2px;
  position: relative;
`;

const Line = styled.div`
  width: 175px;
  height: 1px;
  opacity: 0.3;
  border: solid 0.2px #f8f9fb;
  margin: 60px auto;
`;

const Logo = () => {
  return (
    <React.Fragment>
      <LogoImage src={c} />
      <LogoName>CoinUI</LogoName>
      <Line />
    </React.Fragment>
  );
};

export default Logo;
