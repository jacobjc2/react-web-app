import React, { Component } from 'react';

// Components
import Header from './Components/headerComponent/header'
import Footer from './Components/footerComponent/footer'
import HomePage from './Components/pages/homePage'


// Includes
import './Assets/css/default.min.css';

class App extends Component {
  render () {
    return (
      <div className="App">

        <Header />
        
          <HomePage />

        <Footer />

      </div>
    );
  }
}

export default App;
