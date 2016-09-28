import React from 'react';
import {Row, Col} from 'react-bootstrap';
import $ from 'jquery';
//import packageJSON from '../../package.json';

//let version = packageJSON.version;

/*if (/docs/.test(version)) {
  version = version.split('-')[0];
}*/

const PageFooter = React.createClass({
  render() {
    return (
        <footer className={this.props.className+" container-fluid app-footer"} role="contentinfo">
          <div className="container">
            <Row>
              <Col xs={8} sm={6} md={6} lg={6}>
                <div>
                  <h4 style={{minWidth : '300px'}}><span>Телефон:</span> 0(00)-111-22-33</h4>
                  <p><span>Е-mail:</span>  yovkahan@gmail.com</p>
                  <p><span>Адрес:</span> 01234, Украина, Лучшая обл., г. Лучший, ул. Лучшая 2/21.</p>
                </div>
              </Col>
              <Col xs={4} sm={6} md={6} lg={6} style={{marginTop : '70px'}}>
                <div style={{display: 'inline-block' ,float: 'right'}}><span>Created by Jordan8XD</span><span>  using <a href="https://github.com/react-bootstrap/react-bootstrap" style={{color: 'black'}}>React-Bootstrap</a></span></div>
              </Col>
            </Row>
          </div>
        </footer>
      );
  }
});

export default PageFooter;
