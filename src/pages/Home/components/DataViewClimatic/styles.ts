import styled from 'styled-components/native';

export const DataContainer = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  padding-left: 8%;
  padding-right: 8%;
  margin-bottom: 10px;
`;

export const ViewRow = styled.View`
  display: flex;
  flex-direction: row;
  height: 50%;
  justify-content: space-around;
`;

export const ViewColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleClimatic = styled.Text`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const TextClimatic = styled.Text`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 25px;
  margin-top: 2px;
`;
