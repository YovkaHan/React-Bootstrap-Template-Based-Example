import React from 'react';
import NavMain from './NavMain';
import PageFooter from './PageFooter';
import {Grid, Alert, Glyphicon, Label, Row, Col, Image, Thumbnail, PageHeader} from 'react-bootstrap';
import HeaderTitle from './HeaderTitle';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HeaderTitle className="app-header"/>
        <NavMain activePage="/" />

        <main className="app-masthead" id="content" role="main">
            <h1 className="lead" >Вас приветствует простенький шаблон на "React"е!</h1>
        </main>

        <Grid>
          <Row className="mainRow_1">
            <Col sm={4} md={4} lg={4}>
              <Thumbnail src='./assets/Boss.png' className="mainBossPhoto" style={{textAlign : "center"}} alt="Boss">
                <h5 className="italic bold">начальник</h5>
                <h5 className="bold">Владиславский Владислав Владиславович</h5>
              </Thumbnail>
            </Col>
            <Col  sm={8} md={8} lg={8}>
              <div className="mainPageText textFormat">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra, nibh sit amet vulputate maximus,
                  ex diam faucibus velit, nec lobortis elit massa eget justo. Nunc eros purus, rutrum eget quam in, scelerisque
                  vulputate turpis. Nullam eleifend aliquet turpis eget sollicitudin. Donec massa justo, tincidunt vitae commodo
                  quis, sodales a justo. Aliquam nec orci metus. Maecenas imperdiet egestas ex, nec sodales dui placerat quis.
                  Donec placerat efficitur odio, at aliquet velit eleifend at. Aliquam laoreet tincidunt quam et convallis.
                  Nullam lobortis nulla metus, sed finibus elit laoreet non. Nam tempus tristique enim, a egestas erat vestibulum.
                </p>
                </div>
            </Col>
          </Row>
        </Grid>

        <PageFooter />
      </div>
    );
  }
}
