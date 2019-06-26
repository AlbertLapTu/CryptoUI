import styled from 'styled-components';

export const MarketCapListContainer = styled.ul`
  padding: 0;
  margin: 0;
`;

export const MarketCapContainer = styled.div`
  position: relative;
  top: 215px;
  right: 46px;
  width: 388px;
  border: 2px solid black;
  border-radius: 5px;
  height: 400px;
  font-family: Oxygen;
`;

export const MarketCapHeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const MarketCapEntry = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;

export const IconStyle = styled.img`
  height: 23px;
  width: 23px;
`;

export const Logo = styled.span`
  width: 12px;
  height: 12px;
  background-image: linear-gradient(122deg, #0043ff, #a370f1);
`;

export const IconStyles = styled.img`
  height: 18px;
  width: 18px;
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
