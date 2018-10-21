import convert from 'convert-units'
import { SUN } from "../constans/weathers";

const getTemp = kelvin => Number(convert(kelvin).from('K').to('C').toFixed(2));
const getWeatherSate = weather_data => {
	return SUN
}

const transformWeather = weather_data => {
	const {humidity, temp} = weather_data.main;
	const {speed} = weather_data.wind;
	return {
		humidity,
		temperature: getTemp(temp),
		weatherState: getWeatherSate(weather_data),
		wind: `${speed} m/s`
	};
};

export default transformWeather

