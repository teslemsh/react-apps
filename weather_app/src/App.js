import React, { Component } from 'react';
import './App.css';

import LocationList from "./components/WeatherLocation/LocationList";
const cities = [
	'Buenos Aires,ar',
	'Washington,us',
	'Madrid,es',
	'zurich,sw'
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}/>
      </div>
    );
  }
}

export default App;
