import styled from 'styled-components/native';

export const DaysContainer = styled.View`
  background-color: #fff;
  width: 100%;
  height: 30%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleDays = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
`;
export const ViewRow = styled.View`
  margin-top: 10px;
  flex-direction: row;
  width: 100%;
  height: 40%;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ViewColumn = styled.View`
  height: 80px;
  width: 70px;
  border: 1px solid #d4d4d4;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ViewColumnAjust = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextCelcius = styled.Text`
  color: #d4d4d4;
  font-size: 20px;
  font-weight: 700;
`;
export const TextDays = styled.Text`
  color: #070707;
  font-size: 15px;
  margin-bottom: 2px;
`;
export const UpdateButton = styled.TouchableOpacity`
  background-color: #4f8ea0;
  height: 24%;
  width: 60%;
  margin-top: 8%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TitleButtonInfo = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
