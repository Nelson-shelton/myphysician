/**
 * Weather V2 Widget
 */
import React, { Component, Fragment } from 'react';
import moment from 'moment';
import axios from 'axios';

// function to get today weather icon
function getIcon(id) {
  switch (id) {
    case id >= 200 && id < 300:
      return 'wi wi-night-showers'
    case id >= 300 && id < 500:
      return 'wi day-sleet';
    case id >= 500 && id < 600:
      return 'wi wi-night-showers';
    case id >= 600 && id < 700:
      return 'wi wi-day-snow';
    case id >= 700 && id < 800:
      return 'wi wi-day-fog';
    case id === 800:
      return 'wi wi-day-sunny';
    case id >= 801 && id < 803:
      return 'wi wi-night-partly-cloudy';
    case id >= 802 && id < 900:
      return 'wi wi-day-cloudy';
    case id === 905 || (id >= 951 && id <= 956):
      return 'wi wi-day-windy';
    case id >= 900 && id < 1000:
      return 'wi wi-night-showers'
    default:
      break;
  }
}

// Main component
export default class WeatherWidgets extends Component {

  state = {
    weatherData: null,
    city: this.props.city ? this.props.city : 'New York'
  }

  componentDidMount() {
    var appid = 'b1b15e88fa797225412429c1c50c122a1'; // Your api id
    var apikey = '69b72ed255ce5efad910bd946685883a'; //Your apikey
    axios.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.city + '&cnt=5&units=metric&mode=json&appid=' + appid + '&apikey=' + apikey)
      .then(response => {
        this.setState({ weatherData: response.data });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  renderFiveDayForecast() {
    let ele = <li className="d-flex justify-content-between align-items-center">
      <span className="w-50">Test</span>
      <span className="d-block">1234<sup>°C</sup></span>
    </li>;
    return ele;
  }

  render() {
    const { weatherData } = this.state;
    return (
      <Fragment>
        <div className="weather-top rct-weather-widget ">
        </div>
        <div className="weather-bottom">
        <div>
            Patient Details
        </div>
          <ul className="list-inline mb-0">
          <li className="d-flex justify-content-between align-items-center">
            <span className="w-50">Patient Name:</span>
            <span className="d-block">Nelson Aravindaraj</span>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <span className="w-50">Date and Time:</span>
            <span className="d-block">28 Aug 2017 09:00AM</span>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <span className="w-50">Reason for visit</span>
            <span className="d-block ">Cold, cough and fever</span>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <span className="w-50">Appointment Type:</span>
            <span className="d-block">Office</span>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <span className="w-50">Patient Type:</span>
            <span className="d-block">New</span>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <span className="w-50">Age:</span>
            <span className="d-block">24 years</span>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <span className="w-50">Gender:</span>
            <span className="d-block">Female</span>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <span className="w-50">Allergies:</span>
            <span className="d-block">No Known Allergies</span>
          </li>
          </ul>
        </div>
      </Fragment>
    )
  }
}
