import convert from 'convert-units'
import * as constants from "../constans/weathers";

const getTemp = kelvin => Number(convert(kelvin).from('K').to('C').toFixed(2));
const getWeatherSate = id => {
	if ( id < 300) {
		return constants.THUNDER
	} else if( id < 400) {
		return constants.DRIZZLE
	} else if (id < 600) {
		return constants.RAIN
	} else if (id < 700) {
		return constants.SNOW;
	} else if (id === 800) {
		return constants.SUN
	} else {
		return constants.CLOUD
	}
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

