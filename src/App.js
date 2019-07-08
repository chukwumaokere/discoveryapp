import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import  LandingPage  from './screens/LandingPage.js';


class App extends Component {
  render() {
    return (
        <LandingPage />
    );
  }
}

export default App;
