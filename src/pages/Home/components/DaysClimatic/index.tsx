import React from 'react';

import IconClound from 'react-native-vector-icons/Feather';

IconClound.loadFont();

import {
  DaysContainer,
  TextCelcius,
  TextDays,
  TitleButtonInfo,
  TitleDays,
  UpdateButton,
  ViewColumn,
  ViewColumnAjust,
  ViewRow,
} from './styles';

export const DaysClimatic = () => {
  return (
    <DaysContainer>
      <TitleDays>The Next 5 days</TitleDays>
      <ViewRow>
        <ViewColumnAjust>
          <TextDays>Sunday</TextDays>
          <ViewColumn>
            <IconClound name="cloud" size={30} color="#D4D4D4" />
            <TextCelcius>38 °C</TextCelcius>
          </ViewColumn>
        </ViewColumnAjust>

        <ViewColumnAjust>
          <TextDays>Monday</TextDays>
          <ViewColumn>
            <IconClound name="cloud" size={30} color="#D4D4D4" />
            <TextCelcius>38 °C</TextCelcius>
          </ViewColumn>
        </ViewColumnAjust>

        <ViewColumnAjust>
          <TextDays>Tuesday</TextDays>
          <ViewColumn>
            <IconClound name="cloud" size={30} color="#D4D4D4" />
            <TextCelcius>38 °C</TextCelcius>
          </ViewColumn>
        </ViewColumnAjust>

        <ViewColumnAjust>
          <TextDays>Thursday</TextDays>
          <ViewColumn>
            <IconClound name="cloud" size={30} color="#D4D4D4" />
            <TextCelcius>38 °C</TextCelcius>
          </ViewColumn>
        </ViewColumnAjust>

        <ViewColumnAjust>
          <TextDays>Friday</TextDays>
          <ViewColumn>
            <IconClound name="cloud" size={30} color="#D4D4D4" />
            <TextCelcius>38 °C</TextCelcius>
          </ViewColumn>
        </ViewColumnAjust>
      </ViewRow>
      <UpdateButton>
        <TitleButtonInfo>UPDATE INFOS</TitleButtonInfo>
      </UpdateButton>
    </DaysContainer>
  );
};
