import styled from 'styled-components/native';

export const ContainerSafeArea = styled.SafeAreaView``;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
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
