import axios, { AxiosResponse } from 'axios';
import { WeatherDataItem } from '../types/WeatherDataItem';

const BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL as string;

export const getWeatherData = (
  location: string,
  startDate: string,
  endDate: string
): Promise<WeatherDataItem[]> => {
  return axios
    .get<WeatherDataItem[]>(
      `${BASE_URL}/weather?city=${location}&start_date=${startDate}&end_date=${endDate}`
    )
    .then((response: AxiosResponse<WeatherDataItem[]>) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
};
