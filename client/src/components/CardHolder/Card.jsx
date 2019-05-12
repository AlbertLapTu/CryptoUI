import React from 'react';
import styled from 'styled-components';
import bitcoinLogo from '../../../../Assets/Icons/Crypto/Bitcoin.png';
import downArrow from '../../../../Assets/point-down-red.svg';

//TODO - CardStyle position is hard coded in. How do we split this between multiple cards?
const CardStyle = styled.div`
  position: absolute;
  top: 100px;
  left: 250px;
  width: 270px;
  height: 110px;
  border-radius: 12px;
  border: solid 0.7px #dfe5f9;
  background-color: #ffffff;
`;

const IconStyle = styled.img`
  height: 23px;
  width: 23px;
`;

const TickerStyle = styled.span`
  width: 62px;
  height: 19px;
  font-family: Oxygen;
  font-size: 15px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000a12;
`;

const CoinNameStyle = styled.span`
  width: 58px;
  height: 14px;
  opacity: 0.4;
  font-family: Oxygen;
  font-size: 11px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

const CurrencyStyle = styled.span`
  width: 94px;
  height: 31px;
  font-family: Oxygen;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #000a12;
`;

const DeltaStyle = styled.span`
  width: 53px;
  height: 14px;
  font-family: Oxygen;
  font-size: 11px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ee2e6b;
`;

const LineContainer = styled.hr`
  width: 248px;
  height: 46px;
  border: solid 0.7px #ffc246;
  background-image: linear-gradient(174deg, #ffda8e, #ffffff00);
`;

const CoinInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px 5px;
`;

/**
 *
 * TODO: Figure out how to style a horizontal line in CSS.
 * Perhaps see if you can try using a chart library for this
 */
const Card = () => {
  return (
    <CardStyle>
      <CoinInfoContainer>
        <IconStyle src={bitcoinLogo} />
        <TickerStyle>BTC</TickerStyle>
        <CoinNameStyle>Bitcoin</CoinNameStyle>
        <CurrencyStyle>$3871.21</CurrencyStyle>
        <DeltaStyle>
          -4.66%
          <IconStyle src={downArrow} />
        </DeltaStyle>
      </CoinInfoContainer>
      <LineContainer />
    </CardStyle>
  );
};

export default Card;
