import axios, { AxiosResponse } from 'axios';
import { WeatherDataItem } from '../types/WeatherDataItem';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.WEATHER_API_BASE_URL as string;

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
