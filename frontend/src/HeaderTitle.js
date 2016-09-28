import React from 'react';
import { Link } from 'react-router';
import {Navbar, Nav} from 'react-bootstrap';

let appHeaderStyle = {
  backgroundColor: 'rgba(97, 97, 97, 0.73)'
};

export default class HeaderTitle extends React.Component {
  state = {
    plus : ''
  };
  componentDidMount() {
    if(this.state.plus.indexOf('i-absolute') == -1)
      this.setState({
        plus : ' i-absolute'
      })
  }
    render() {
        return (
            <div className={this.props.className} style={appHeaderStyle} >
                <div className="app-header-title-logo"></div>
              <div className={"app-header-title-signs"+this.state.plus}>
                <div className="app-header-title-mob">0(00) 111-22-33</div>
                <div className="app-header-title-adr">Украина, Лучшая обл., г. Лучший, ул. Лучшая 2/21</div>
                </div>
            </div>
        );
    }
}
