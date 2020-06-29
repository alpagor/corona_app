import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api"; //when we have just index file we don't specify index

import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData }); // we populate the data in the state
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
    console.log(fetchedData);

    // set the state
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
