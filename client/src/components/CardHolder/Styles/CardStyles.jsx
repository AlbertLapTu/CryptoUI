import styled from 'styled-components';

//TODO - CardStyle position is hard coded in. How do we split this between multiple cards?
export const CardStyle1 = styled.div`
  position: absolute;
  top: 100px;
  left: 250px;
  width: 270px;
  height: 110px;
  border-radius: 12px;
  border: solid 0.7px #dfe5f9;
  background-color: #ffffff;
`;

export const CardStyle2 = styled.div`
  position: absolute;
  top: 100px;
  left: 540px;
  width: 270px;
  height: 110px;
  border-radius: 12px;
  border: solid 0.7px #dfe5f9;
  background-color: #ffffff;
`;

export const CardStyle3 = styled.div`
  position: absolute;
  top: 100px;
  left: 828px;
  width: 270px;
  height: 110px;
  border-radius: 12px;
  border: solid 0.7px #dfe5f9;
  background-color: #ffffff;
`;

export const CardStyle4 = styled.div`
  position: absolute;
  top: 100px;
  left: 1115px;
  width: 270px;
  height: 110px;
  border-radius: 12px;
  border: solid 0.7px #dfe5f9;
  background-color: #ffffff;
`;

export const IconStyle = styled.img`
  height: 23px;
  width: 23px;
`;

export const TickerStyle = styled.span`
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

export const CoinNameStyle = styled.span`
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

export const CurrencyStyle = styled.span`
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

export const DeltaStyle = styled.span`
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

export const LineContainer = styled.hr`
  width: 248px;
  height: 46px;
  border: solid 0.7px #ffc246;
  background-image: linear-gradient(174deg, #ffda8e, #ffffff00);
`;

export const CoinInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px 5px;
`;
