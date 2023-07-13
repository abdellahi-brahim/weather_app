# Weather Application

This is a simple weather application built with React. This application fetches weather data for a specified location and date range from a backend service, and presents this data as a line graph using the Recharts library.

## Getting Started

To get started with the Weather Application, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-application.git
```

2. Install the dependencies:

```bash
cd weather-application
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and visit `http://localhost:3000` to see the application running.

## Usage

The Weather Application allows you to input a location, start date, and end date to fetch the weather data for that location within the specified date range. After submitting the form, the application will display a line chart showing the maximum and minimum temperatures for each date.

## Backend Service

The backend service for retrieving weather data is implemented in the `WeatherService.ts` file. It uses the Axios library to make a GET request to the backend API endpoint, passing the location, start date, and end date as query parameters. The response is expected to be an array of objects conforming to the `WeatherDataItem` interface.

## API Endpoint

The application expects the backend API endpoint to be available at `http://localhost:3000/weather`. The endpoint should accept the following query parameters:

- `city` (string): The location or city name.
- `start_date` (string): The start date of the weather data range in YYYY-MM-DD format.
- `end_date` (string): The end date of the weather data range in YYYY-MM-DD format.

Ensure that the backend API is properly set up and running before using the Weather Application.

## Dependencies

The following dependencies are used in this application:

- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making API requests.
- Recharts: A charting library for React.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
