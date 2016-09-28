import React from 'react';

import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import HeaderTitle from './HeaderTitle';
import Anchor from './Anchor';
import {Row, Col, Panel} from 'react-bootstrap';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <HeaderTitle className="app-header"/>
        <NavMain activePage="articles" />
          <header style={{'textAlign': 'center'}}><h2>Не придумал что здесь разместить...</h2></header>
        <PageFooter />
      </div>
      );
  }

  shouldComponentUpdate() {
    return false;
  }
}
