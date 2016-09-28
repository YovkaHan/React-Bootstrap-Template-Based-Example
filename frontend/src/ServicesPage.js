import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import {Grid, Alert, Glyphicon, Label, Row, Col, Image, Table, Modal, Button } from 'react-bootstrap';
import HeaderTitle from './HeaderTitle';
import ServiceTable from './ServiceTable';
import $ from 'jquery';


export default class ServicesPage extends React.Component {
  state = {
    show_1: false,
    show_2: false,
    col_1: [6, 6, 8],
    col_2: [6, 6, 4]
  };
  showModal_1 = () => {
    this.setState({show_1: true});
  };
  showModal_2 = () => {
    this.setState({show_2: true});
  };

  hideModal_1 = () =>  {
    this.setState({show_1: false});
  };
  hideModal_2 = () =>  {
    this.setState({show_2: false});
  };

  eventHandler = (event) => {
    /* if($(ReactDOM.findDOMNode(this.refs.specPropoTextItself)).hasClass("hidden")) {
     $(ReactDOM.findDOMNode(this.refs.specPropoTextItself)).removeClass("hidden");
     } else {
     $(ReactDOM.findDOMNode(this.refs.specPropoTextItself)).addClass("hidden");
     }*/
    if ($(ReactDOM.findDOMNode(this.refs.specPropoTextItself)).hasClass("h")) {
      $(ReactDOM.findDOMNode(this.refs.specPropoTextItself)).removeClass("h");
      $(ReactDOM.findDOMNode(this.refs.specPropo)).animate({
        height: '230px'
      }, 500);
    } else {
      $(ReactDOM.findDOMNode(this.refs.specPropoTextItself)).addClass("h");
      $(ReactDOM.findDOMNode(this.refs.specPropo)).animate({
        height: '86px'
      }, 500);
    }
  };
  closeSpecialProp = (event) => {
    this.refs.specPropo.className+= " hidden";
    this.setState({col_1 : [12, 12, 12]});
  };

  render() {
    return (
      <div >
        <HeaderTitle className="app-header"/>
        <NavMain activePage="services" />
        <Grid className="service-top">
          <Row>
            <Col sm={this.state.col_1[0]} md={this.state.col_1[1]} lg={this.state.col_1[2]}>
              <p className="title-text">Простенький шаблон на "React"е включает в себя некоторые примитивные возможности и по сути является лишь тенью той мощи которой владет
                или может приобретси сайт написан с помощью "React"а.</p>
            </Col>
            <Col sm={this.state.col_2[0]} md={this.state.col_2[1]} lg={this.state.col_2[2]}>
              <div className="spec-propo" ref = "specPropo">
                <a href="#" onClick={this.closeSpecialProp} className="close-thik"></a>
                <h4 style={{textAlign : "center"}}>Специальное предложение</h4>
                <h3 style={{textAlign : "center"}} onClick={this.eventHandler.bind(this)} className="spec-propo-click">Название</h3>
                <div className="spec-propo-text"><p className="" ref = "specPropoTextItself">Здесь могла быть Ваша реклама</p>
                <div style={{textAlign : "center", position : 'absolute', left: '39%', bottom : '4%'}}><a onClick={this.showModal_1}>Подробнее</a></div></div>
                <Modal
                  {...this.props}
                  show={this.state.show_1}
                  onHide={this.hideModal_1}
                  dialogClassName="custom-modal"
                  >
                  <Modal.Header closeButton>
                    <Modal.Title style={{textAlign : "center"}}>Название</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <div style={{margin: "10px 1px"}}>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra, nibh sit amet vulputate maximus, ex diam faucibus velit, nec lobortis elit massa eget justo. </p>
                          <p> Nunc eros purus, rutrum eget quam in, scelerisque vulputate turpis. Nullam eleifend aliquet turpis eget sollicitudin. Donec massa justo, tincidunt vitae commodo quis, sodales a justo.</p>
                          <p> Aliquam nec orci metus:</p>
                          <ul>
                            <li>proin finibus eros imperdiet tristique accumsan;</li>
                            <li>nullam quis arcu eleifend neque semper aliquam;</li>
                            <li>sed vel nisl imperdiet, aliquam eros vel, rutrum lacus;</li>
                            <li>sed luctus nibh at ipsum pellentesque placerat.</li>
                            <li>nunc interdum risus vitae turpis placerat hendrerit.</li>
                          </ul>
                        </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.hideModal_1}>Закрыть</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Col>
          </Row>
          <div style={{margin: "40px 0 10px 0"}}><Button  bsStyle="primary"  style={{margin: "1px auto", display: "flex"}} onClick={this.showModal_2}>Подробнее о главном</Button></div>
          <Modal
            {...this.props}
            show={this.state.show_2}
            onHide={this.hideModal_2}
            dialogClassName="custom-modal"
            >
            <Modal.Header closeButton>
              <Modal.Title style={{textAlign : "center"}}>Подробнее о главном</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <div>
                  <div>
                  <p>
                    Suspendisse potenti. Vestibulum faucibus leo eget sagittis porta. Ut imperdiet iaculis semper.
                    Quisque tincidunt, purus non commodo iaculis, justo augue imperdiet neque, ac pretium tellus magna at augue.
                    Etiam sollicitudin nibh vitae urna viverra fermentum. Ut aliquam, magna vel imperdiet dictum, orci ipsum laoreet massa, sit amet commodo dolor ante a mauris.
                  </p>
                  </div>
                  <div>
                  <p>
                    Sed facilisis dapibus dolor eget pretium. Etiam lacinia aliquet lectus et vulputate. Ut id aliquet neque.
                    Cras quis dolor blandit, facilisis dolor ultrices, tempor nisi.
                  </p>
                  </div>
                  <div>
                    <p>
                      Aenean fringilla, ante id sodales congue, eros nibh euismod nibh, quis iaculis arcu lectus vitae ipsum.
                      Morbi ante risus, gravida in aliquam a, consequat et ligula. Fusce congue elit lorem, sit amet dignissim ipsum semper vitae.
                      Aliquam vel ligula at lectus iaculis tincidunt. Morbi leo nunc, varius sed ultrices id, maximus eget ipsum.
                      Nunc fermentum velit enim, ut ullamcorper ante commodo non. Sed ultrices sit amet dolor non condimentum.
                      Nulla eu nisl sed felis bibendum tempor id eget nulla. Fusce vel tellus ante.
                    </p>
                  </div>
                  <div>
                    <p>
                      Cras mattis egestas sem ac scelerisque. Curabitur venenatis vel sem nec lobortis.
                      Proin in gravida nunc, eget finibus felis. Fusce hendrerit malesuada rhoncus.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet malesuada felis, in fringilla metus pellentesque quis.
                      Sed augue arcu, pulvinar sit amet maximus et, molestie eget dui. Phasellus condimentum auctor diam in vestibulum.
                    </p>
                    <div style={{display: "table", margin: '1px auto'}}><Link to='/all_available_services.html'><button>Что-то там дальше</button></Link></div>
                  </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideModal_2}>Закрыть</Button>
            </Modal.Footer>
          </Modal>
        </Grid>
        <div className="container">
          <span>Поиск по списку услуг:</span>
          <ServiceTable className="service-table" />
        </div>
        <PageFooter/>
      </div>
    );
  }
}
