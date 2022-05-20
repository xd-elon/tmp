import React from 'react';
import IconClound from 'react-native-vector-icons/Feather';

IconClound.loadFont();

import {LocationDateTempContainer, TextCelcius, WhiteCircle} from './styles';

export const Temperature = () => {
  return (
    <LocationDateTempContainer>
      <WhiteCircle>
        <IconClound name="cloud" size={80} color="#D4D4D4" />
        <TextCelcius>38°C</TextCelcius>
      </WhiteCircle>
    </LocationDateTempContainer>
  );
};
