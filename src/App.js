import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { pdfjs } from "react-pdf";

// Components
import Header from './Components/headerComponent/header'
import Footer from './Components/footerComponent/footer'
import HomePage from './Components/pages/homePage'
import AboutPage from './Components/pages/aboutPage'
import ContactPage from './Components/pages/contactPage'
import ProjectPage from './Components/pages/projectPage'


// Includes
import './Assets/css/default.min.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={ HomePage }/>
          <Route exact path="/about" component={ AboutPage }/>
          <Route exact path="/projects" component={ ProjectPage }/>
          <Route exact path="/contact" component={ ContactPage }/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
