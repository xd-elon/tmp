import React from 'react';

import {
  DataContainer,
  TextClimatic,
  TitleClimatic,
  ViewColumn,
  ViewRow,
} from './styles';

export const DataViewClimatic = () => {
  return (
    <DataContainer>
      <ViewRow>
        <ViewColumn>
          <TitleClimatic>Wind status</TitleClimatic>
          <TextClimatic>7 mph</TextClimatic>
        </ViewColumn>
        <ViewColumn>
          <TitleClimatic>Visibility</TitleClimatic>
          <TextClimatic>6.4 miles</TextClimatic>
        </ViewColumn>
      </ViewRow>
      <ViewRow>
        <ViewColumn>
          <TitleClimatic>Humidity</TitleClimatic>
          <TextClimatic>85%</TextClimatic>
        </ViewColumn>
        <ViewColumn>
          <TitleClimatic>Air pressure</TitleClimatic>
          <TextClimatic>998 mb</TextClimatic>
        </ViewColumn>
      </ViewRow>
    </DataContainer>
  );
};
