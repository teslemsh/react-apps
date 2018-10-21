import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const WeatherExtraInfo = ({wind, humidity}) => {
	return <div className="weatherExtraInfoCont">
		<span className="extraInfoText">{`Humedad: ${humidity}% `}</span>
		<span className="extraInfoText">{`Viento: ${wind}`}</span>
	</div>
};
WeatherExtraInfo.propTypes = {
	wind: PropTypes.string,
	humidity: PropTypes.number.isRequired
}
export default WeatherExtraInfo