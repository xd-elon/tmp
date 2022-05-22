import React, {ReactNode} from 'react';

import IconClound from 'react-native-vector-icons/Feather';

IconClound.loadFont();

import {
  DaysContainer,
  TextCelcius,
  TextDays,
  TitleDays,
  ViewColumn,
  ViewColumnAjust,
  ViewRow,
} from './styles';

interface IPropsDaysClimatic {
  days: number;
  children: ReactNode;
}

export const DaysClimatic = ({children}: IPropsDaysClimatic) => {
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
      {children}
    </DaysContainer>
  );
};
