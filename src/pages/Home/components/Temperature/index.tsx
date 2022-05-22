import React from 'react';
import IconClound from 'react-native-vector-icons/Feather';

IconClound.loadFont();

import {LocationDateTempContainer, TextCelcius, WhiteCircle} from './styles';

interface IPropsTemperature {
  temperature: number | undefined;
}

export const Temperature = ({temperature}: IPropsTemperature) => {
  return (
    <LocationDateTempContainer>
      <WhiteCircle>
        <IconClound name="cloud" size={75} color="#D4D4D4" />
        <TextCelcius>
          {temperature === undefined
            ? 'loading'
            : `${Math.floor(temperature)}°C`}
        </TextCelcius>
      </WhiteCircle>
    </LocationDateTempContainer>
  );
};
