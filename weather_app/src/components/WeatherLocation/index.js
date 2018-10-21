import React, {Component } from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData/index'
import './styles.css'
import transformWeather from '../../services/transformWeather'
import { SUN } from "../../constans/weathers";
import weather_url from '../../constans/url_weather'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Draggable from 'react-draggable'

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.primary,
	},
});

class WeatherLocation extends Component {
	constructor () {
		super();
		this.state = {
			city: 'Buenos Aires',
			data: {
				temperature: 5,
				weatherState: SUN,
				humidity: 10,
				wind: '10/S'
			},
			height: 0
		}
		
	}
	handleUpdateClick = () => {
		fetch(weather_url)
			.then(response=> response.json())
			.then(response => {
				this.setState({
					data:transformWeather(response)
				})
			})
			.catch(error => console.error(error))
		console.log('actualizado')
	};
	render() {
		const {city, data} = this.state;
		return <div className={styles.root}>
			<Grid container>
				<Draggable>
					<Grid item>
						<div className="weatherLocationCont">
							<Location city={city}/>
							<WeatherData data ={data}/>
							<button onClick={this.handleUpdateClick}>Actualizar</button>
						</div>
						<div className="weatherLocationCont">
							<Location city={city}/>
							<WeatherData data ={data}/>
							<button onClick={this.handleUpdateClick}>Actualizar</button>
						</div>
					</Grid>
				</Draggable>
				<Draggable>
					<Grid item xs>
						<Paper className={styles.paper}>xs</Paper>
					</Grid>
				</Draggable>
				<Draggable>
					<Grid item xs>
						<Paper className={styles.paper}>xs</Paper>
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
		}
	)
};
export default  WeatherLocation;