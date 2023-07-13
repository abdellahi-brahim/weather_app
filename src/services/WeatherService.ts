// in WeatherService.ts
import axios, { AxiosResponse } from 'axios';
import { WeatherDataItem } from '../types/WeatherDataItem';

export const getWeatherData = (
  location: string,
  startDate: string,
  endDate: string
): Promise<WeatherDataItem[]> => {
  return axios
    .get<WeatherDataItem[]>(
      `http://localhost:3000/weather?city=${location}&start_date=${startDate}&end_date=${endDate}`
    )
    .then((response: AxiosResponse<WeatherDataItem[]>) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
};
