import React from 'react'
import PropTypes from 'prop-types'
import WeatherIcons from 'react-weathericons'
import {
	CLOUD ,
	CLOUDY ,
	SNOW ,
	SUN ,
	RAIN ,
	WINDY
} from '../../../constans/weathers';
import './styles.css'

const stateToIconName = weatherState => {
	console.log ( weatherState )
	switch ( weatherState ) {
		case CLOUD:
			return "cloud";
		case CLOUDY:
			return "cloudy";
		case SUN:
			return "day-sunny";
		case RAIN:
			return "rain";
		case SNOW:
			return "snow";
		case WINDY:
			return "windy";
		default:
			return "day-sunny";
		
	}
};
const getWeatherIcon = weatherState => {
	const sizeIcon = "4x";
	return <WeatherIcons className="wicon" name={ stateToIconName ( weatherState ) } size={sizeIcon}/>
};
const WeatherTemperature = ( { temperature , weatherState } ) => {
	return <div className="weatherTemperatureCont">
		{ getWeatherIcon ( weatherState ) }
		<span className="temperature">{ `${temperature}` }</span>
		<span className="temperatureType">{`Cº`}</span>
	</div>
};

WeatherTemperature.propTypes = {
	temperature : PropTypes.number.isRequired,
	weatherState: PropTypes.string
};
export default WeatherTemperature