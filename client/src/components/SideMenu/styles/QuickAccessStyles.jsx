import styled from 'styled-components';

export const QuickAccessContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-start;
  padding-left: 23px;
`;

export const ListItemStyle = styled.li`
  list-style: none;
  padding-top: 5px;
`;

export const QuickAccessTitleStyle = styled.span`
  display: flex;
  align-items: center;
  flex-direction: flex-start;
  padding: 6px 21px 13px 23px;
`;

export const IconStyles = styled.img`
  height: 20px;
  width: 20px;
  padding-right: 8px;
`;

export const MyWalletContainer = styled.div`
  &:last-child {
    border-color: red;
  }
`;
