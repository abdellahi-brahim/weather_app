import React, { useState } from "react";
import { getWeatherData } from "./services/WeatherService";
import { WeatherDataItem } from "./types/WeatherDataItem";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const WeatherForm: React.FC = () => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherDataItem[]>([]);

  const fetchWeatherData = async (): Promise<void> => {
    const data = await getWeatherData(location, startDate, endDate);
    setWeatherData(data);
  };

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    fetchWeatherData().catch((e) => console.error(e));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.currentTarget.value)}
          />
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.currentTarget.value)}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.currentTarget.value)}
          />
        </div>
        <button type="submit">Get Data</button>
      </form>
      <LineChart
        width={500}
        height={300}
        data={weatherData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="max_temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="min_temperature" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default WeatherForm;
