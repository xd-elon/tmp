import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar, StyleSheet} from 'react-native';
import axios from 'axios';
import moment from 'moment';

import {
  Container,
  ContainerSafeArea,
  TitleButtonInfo,
  UpdateButton,
} from './styles';

import {DaysClimatic} from './components/DaysClimatic';
import {DataViewClimatic} from './components/DataViewClimatic';
import {Temperature} from './components/Temperature';
import {LocationDate} from './components/LocationDate';
import GetLocation from 'react-native-get-location';

// const open_weather_API_KEY = 'b6c7476fe1190e0c9a52de6b6f5b999d';
// const apiURl = https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

interface IRequestCordinates {
  accuracy: number;
  altitude: number;
  bearing: number;
  latitude: number;
  longitude: number;
  provider: string;
  speed: number;
  time: number;
}

interface IRequestClimatic {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: number;
    },
  ];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export const Home = () => {
  const [coordenates, setCoordenates] = useState<IRequestCordinates>();
  const [climatic, setClimatic] = useState<IRequestClimatic>();
  const open_weather_API_KEY = 'b6c7476fe1190e0c9a52de6b6f5b999d';

  if (coordenates === undefined) {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => setCoordenates(location))
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }
  useEffect(() => {
    if (
      coordenates?.latitude !== undefined &&
      coordenates.latitude !== undefined
    ) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coordenates?.latitude}&lon=${coordenates?.longitude}&appid=${open_weather_API_KEY}&lang=pt&units=metric`,
        )
        .then(res => {
          setClimatic(res.data);
          console.log(climatic);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordenates]);

  function updateInfos() {
    setCoordenates(undefined);
  }

  const date = moment();

  // console.log(coordenates, climatic);
  // console.log(date.format('DD/MM/YYYY'));

  return (
    <ContainerSafeArea>
      <StatusBar backgroundColor="#30A2C5" />
      <LinearGradient colors={['#30A2C5', '#00242F']} style={styles.gradient}>
        <Container>
          <LocationDate
            date={date.format('MMMM DD YYYY')}
            city={climatic?.name}
            country={climatic?.sys.country}
          />
          <Temperature temperature={climatic?.main.temp} />
          <DataViewClimatic
            windValue={climatic?.wind.gust}
            visibilityValue={climatic?.visibility}
            humidityValue={climatic?.main.humidity}
            airPressureValue={climatic?.main.pressure}
          />
          <DaysClimatic days={0}>
            <UpdateButton onPress={() => updateInfos()}>
              <TitleButtonInfo>UPDATE INFOS</TitleButtonInfo>
            </UpdateButton>
          </DaysClimatic>
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
