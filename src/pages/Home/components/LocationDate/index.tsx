import React from 'react';

import {
  LocationDateContainer,
  TextDate,
  TextLocation,
  TextPais,
} from './styles';

export const LocationDate = () => {
  return (
    <LocationDateContainer>
      <TextDate>Today, May 7th, 2021</TextDate>
      <TextLocation>Barcelona</TextLocation>
      <TextPais>Spain</TextPais>
    </LocationDateContainer>
  );
};
