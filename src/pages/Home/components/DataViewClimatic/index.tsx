import React from 'react';

import {
  DataContainer,
  TextClimatic,
  TitleClimatic,
  ViewColumn,
  ViewRow,
} from './styles';

interface IPropsDaysClimatic {
  windValue: number | undefined;
  visibilityValue: number | undefined;
  humidityValue: number | undefined;
  airPressureValue: number | undefined;
}

export const DataViewClimatic = ({
  windValue,
  visibilityValue,
  humidityValue,
  airPressureValue,
}: IPropsDaysClimatic) => {
  return (
    <DataContainer>
      <ViewRow>
        <ViewColumn>
          <TitleClimatic>Wind status</TitleClimatic>
          <TextClimatic>{windValue} mph</TextClimatic>
        </ViewColumn>
        <ViewColumn>
          <TitleClimatic>Visibility</TitleClimatic>
          <TextClimatic>{visibilityValue} miles</TextClimatic>
        </ViewColumn>
      </ViewRow>
      <ViewRow>
        <ViewColumn>
          <TitleClimatic>Humidity</TitleClimatic>
          <TextClimatic>{humidityValue} %</TextClimatic>
        </ViewColumn>
        <ViewColumn>
          <TitleClimatic>Air pressure</TitleClimatic>
          <TextClimatic>{airPressureValue} hpa</TextClimatic>
        </ViewColumn>
      </ViewRow>
    </DataContainer>
  );
};
