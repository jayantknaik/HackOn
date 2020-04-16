import React from 'react';



import styles from './App.module.css';

import image from './images/image.png';
import NavBar from './components/navbar';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
          <NavBar />
          <img className={styles.image} src={image} alt="COVID-19" />
          
          
      </div>
    );
  }
}

export default App;