import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Custom.css';


class App extends Component {
  render() {
    return (
	<div className="bg">
		 	<Row>
		    	<Col> 
                    <div className="lp-left"> 
                        <div className="info-box mx-auto my-auto">
                            <div className="info-box-item"> <span class="icon-box"> <i class="fa fa-2x fa-search icon-size"></i></span> Discover new artists and new music </div>
                            <div className="info-box-item"> <span class="icon-box"> <i class="fa fa-2x fa-users icon-size"></i></span> Proudly share the artists you support </div>
                            <div className="info-box-item"> <span class="icon-box"> <i class="fa fa-2x fa-seedling icon-size"></i></span> Help your favorite artists grow </div>
                        </div>
                    </div> 
                </Col>
		 		<Col> 
                    <div className="lp-right"> 
            
                    </div> 
                </Col>
		  	</Row>
	</div>
    );
  }
}

export default App;
