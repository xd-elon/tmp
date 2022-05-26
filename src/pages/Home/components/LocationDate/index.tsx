import React from 'react';

import {
  LocationDateContainer,
  TextDate,
  TextLocation,
  TextPais,
} from './styles';

interface IPropsLocationDate {
  date: string;
  city: string | undefined;
  country: string | undefined;
}

export const LocationDate = ({date, city, country}: IPropsLocationDate) => {
  return (
    <LocationDateContainer>
      <TextDate>{`Today, ${date === undefined ? 'loading' : date}`}</TextDate>
      <TextLocation>{city}</TextLocation>
      <TextPais>{country}</TextPais>
    </LocationDateContainer>
  );
};
