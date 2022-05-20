import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar, StyleSheet} from 'react-native';

import {Container, ContainerSafeArea} from './styles';

import {DaysClimatic} from './components/DaysClimatic';
import {DataViewClimatic} from './components/DataViewClimatic';
import {Temperature} from './components/Temperature';
import {LocationDate} from './components/LocationDate';

export const Home = () => {
  return (
    <ContainerSafeArea>
      <StatusBar backgroundColor="#30A2C5" />
      <LinearGradient colors={['#30A2C5', '#00242F']} style={styles.gradient}>
        <Container>
          <LocationDate />
          <Temperature />
          <DataViewClimatic />
          <DaysClimatic />
        </Container>
      </LinearGradient>
    </ContainerSafeArea>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
  },
});
