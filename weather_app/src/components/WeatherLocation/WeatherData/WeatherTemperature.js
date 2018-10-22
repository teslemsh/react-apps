import React from 'react'
import PropTypes from 'prop-types'
import WeatherIcons from 'react-weathericons'
import {
	CLOUD ,
	SNOW ,
	SUN ,
	RAIN ,
	THUNDER ,
	DRIZZLE
} from '../../../constans/weathers';
import './styles.css'

const stateToIconName = weatherState => {
	switch ( weatherState ) {
		case CLOUD:
			return "cloud";
		case SUN:
			return "day-sunny";
		case RAIN:
			return "rain";
		case SNOW:
			return "snow";
		case THUNDER:
			return 'thunder';
		case DRIZZLE:
			return 'drizzle';
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