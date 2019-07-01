import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import  FontAwesomeIcon  from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/fontawesome-free-solid';
import { Container, Row, Col } from 'react-bootstrap';
import './Custom.css';

library.add(faCheckSquare);

class App extends Component {
  render() {
    return (
	<div className="bg">
		<Container>
		 	<Row>
		    	<Col> 
                    <div className="lp-left"> 
                        Hi
                    </div> 
                </Col>
		 		<Col> 
                    <div className="lp-right"> 
            
                    </div> 
                </Col>
		  	</Row>
		</Container>
	</div>
    );
  }
}

export default App;
