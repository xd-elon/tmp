# Climatic Builders

## tecnologias usadas
- `React-native`
- `Typescript`
- `Axios`
- `styled-components/native`
- `@react-navigation` and `@react-navigation/stack`
- `react-native-linear-gradient`
- `react-native-vector-icons/Feather`
- `moment`
- `react-native-get-location`

response da localização do dispositivo:
ex 
`interface IRequestCordinates {
  accuracy: number;
  altitude: number;
  bearing: number;
  latitude: number;
  longitude: number;
  provider: string;
  speed: number;
  time: number;
}`

response da api limitada a 60 requisições por segundo:
ex: 
`interface IRequestClimatic {
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
}`

exemplo url: https://api.openweathermap.org/data/2.5/weather?lat=${coordenates?.latitude}&lon=${coordenates?.longitude}&appid=${open_weather_API_KEY}&lang=pt&units=metric

fonte de dados usada (api gratis limitada a certas condições e informações) site dos detentores da API : https://openweathermap.org/

link de referencia do design figma (não autoral): https://www.figma.com/file/Nm1Rjtk1wNu6OfY9aVPOKN/Weather-App-(Community)?node-id=0%3A1


![climatic](https://user-images.githubusercontent.com/66836570/169615833-37f7ebe7-ba65-4c9b-b719-052c6b12be31.jpeg)
