import styled from 'styled-components';

export const TopHeaderStyle = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 0 8px 28px 0 #48596619;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

export const TopHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const IconStyles = styled.img`
  height: 20px;
  width: 20px;
`;

export const Input = styled.input.attrs({
  type: 'text'
})`
  width: 100%;
  border-radius: 15px;
  background-color: #f8f9fb;
  display: block;
  font-family: Oxygen;
  background-color: #f8f9fb;
`;

export const ImageTile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 17px;
  background-color: grey;
`;

export const TopHeaderSectionOne = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-evenly;
`;

export const TopHeaderSectionTwo = styled.div`
  width: 40%;
`;

export const TopHeaderSectionThree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;
`;
