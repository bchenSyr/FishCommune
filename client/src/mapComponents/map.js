import React, { Component } from "react";
import SeasonDisplay from "./season-display";
import Weather from "./weather";
import axios from "axios";

const weatherApiKey = "e31b2737923f4ac45f4a990839b2b7e8";
const url = "http://api.openweathermap.org/data/2.5/weather";

export default class map extends Component {
  state = {
    lat: null,
    lon: null,
    errorMessage: null,
    location: null,
    main: null,
    description: null
  };

  onloadWeather() {
    axios
      .get(url, {
        params: {
          lat: this.state.lat,
          lon: this.state.lon,
          appid: weatherApiKey
        }
      })
      .then(response => {
        this.setState({
          location: response.data.name,
          main: response.data.weather[0].main,
          description: response.data.weather[0].description
        });
      });
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude.toFixed(2),
          lon: position.coords.longitude.toFixed(2)
        });
        this.onloadWeather();
      },
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />
          <Weather
            location={this.state.location}
            main={this.state.main}
            description={this.state.description}
          />
        </div>
      );
    }
    return <div>Loading...</div>;
  }

  // every time the state/props change, React will rerender the component
  render() {
    return this.renderContent();
  }
}

/** Componet Lifecycle
 *
 * ronstructor() - good place to do one-time setup
 * render() - avoid doing anything beside return jsx
 *
 *   --> HTML and other content show up on the screen
 *   --> call this:
 * componentDidMount() - good place to do data-loading
 *
 *   --> Sit and wait for updates...
 *
 * componentDidUpdate() - good place to do more data-loading when state/props change
 *
 *   --> Sit and wait until this component is not needed
 *
 * componentWillUnmount() - good place to do cleanup (especiallly for not-React stuff)
 *
 *  */

/** constructor() - paricular to JS, not to React
  *  super() references to constructor() of the parent class "React.Component'
  *   
  
  ```
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: null };
  }
  ``
  above code can be refactored as below (translated by Babel)
  
  ```
  state = { lat: null, errorMessage: null };
  ```
  * 
  * */

/**
 * Avoid Conditional in Render
 *  */
