import React, {Component } from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData/index'
import './styles.css'
import transformWeather from '../../services/transformWeather'
// import { SUN } from "../../constans/weathers";
import Grid from '@material-ui/core/Grid'
import Draggable from 'react-draggable'
import CircularProgress from '@material-ui/core/CircularProgress'
import { getUrlWeatherByCity } from "../../services/getUrlWeatherByCity";

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
});

class WeatherLocation extends Component {
	constructor (props) {
		super(props)
		const { city } = props
		console.log(city)
		
		this.state = {
			city,
			data: null
		}
	}
	componentDidMount() {
		this.handleUpdateClick()
	}
	handleUpdateClick = () => {
		const api_weather = getUrlWeatherByCity(this.state.city)
		fetch(api_weather)
			.then(response=> response.json())
			.then(response => {
				this.setState({
					data:transformWeather(response)
				})
			})
			.catch(error => console.error(error))
	};
	render() {
		const {city, data} = this.state;
		return <div className={styles.root}>
			<Grid container>
				<Draggable>
					<Grid item>
						<div className="weatherLocationCont">
							<Location city={city}/>
							{ data ?
									<WeatherData data ={data}/> :
									<CircularProgress size={50}/>
							}
						</div>
					</Grid>
				</Draggable>
			</Grid>
		</div>
	}
}

WeatherLocation.protoTypes = {
	data: PropTypes.shape ({
			temperature: PropTypes.number.isRequired,
			weatherSate: PropTypes.string.isRequired,
			humidity: PropTypes.number.isRequired,
			wind: PropTypes.string.isRequired,
			city: PropTypes.string.isRequired,
		}
	)
};
export default  WeatherLocation;