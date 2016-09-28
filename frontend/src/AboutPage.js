import React from 'react';
import ReactDOM from 'react-dom';
import NavMain from './NavMain';
import PageFooter from './PageFooter';
import {Grid, Alert, Glyphicon, Label, Row, Col, Image, Thumbnail, Modal, Button} from 'react-bootstrap';
import HeaderTitle from './HeaderTitle';
import MyOrderedList from './MyOrderedList';
import Slider from 'react-slick';
import $ from 'jquery';

let images = [
  './assets/carousel_img_sm.png'
];

var SampleNextArrow = React.createClass({
  render: function() {
    return <div {...this.props} style={{display: 'block', background: 'red', height: '19px'}}></div>;
  }
});

var SamplePrevArrow = React.createClass({
  render: function() {
    return (
      <div {...this.props} style={{display: 'block', background: 'red', height: '19px'}}></div>
    );
  }
});
// carousel styles


export default class AboutPage extends React.Component {
  state = {
    carousels : {},
    index: 0,
    isOpen: false,
    fImg: ''
  };
  openLightbox = (event) =>{
    let i = event.target.src.indexOf("_sm");
    this.setState({
      index: images.indexOf(event.target.src),
      isOpen: true,
      fImg: event.target.src.substr(0, i) + event.target.src.substring(i+3)
    });
  };
  closeLightbox = () => {
    this.setState({ isOpen: false });
  };
  moveNext = () => {
    this.setState({ index: (this.state.index + 1) % images.length });
  };
  movePrev = () => {
    this.setState({ index: (this.state.index + images.length - 1) % images.length });
  };
  componentDidMount = () => {
    setTimeout(() => {
      window.dispatchEvent( new Event ('resize'));
    }, 0);
  };
  constructor(props) {
    super(props);
  }
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="aboutPage">
        <HeaderTitle className="app-header"/>
        <NavMain activePage="about" />

        <main className="app-masthead" id="content" role="main">
            <h3 className="lead">Кто мы ?</h3>
        </main>

        <div className="aboutTextDiv1text textFormat container" style={{minWidth : '293px'}}>
          <p>Nullam egestas fermentum mollis. Sed placerat iaculis justo id sagittis. Mauris ultricies urna id porta lobortis.
            Pellentesque fermentum bibendum sodales. Aliquam tempus et nulla a fermentum. Fusce tellus turpis, porta ut finibus nec, ornare nec est.
            In blandit in nulla vitae fermentum. Phasellus id tortor sit amet arcu laoreet auctor ac dignissim ex. Duis sit amet mattis sem.
            Quisque luctus risus lorem, gravida imperdiet nunc vestibulum in. Proin justo enim, sollicitudin id quam quis, placerat rhoncus libero.
          </p>
        </div>

        <Grid>
          <Row className="aboutRow">
            <Col xs={6} sm={6} md={6} lg={6} style={{ textAlign : "center"}}>
              <Thumbnail src='./assets/Boss.png' className="mainBossPhoto" alt="Boss">
                <h5 className="italic bold">начальник</h5>
                <h5 className="bold">Владиславский Владислав Владиславович</h5>
              </Thumbnail>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} style={{ textAlign : "center"}}>
              <Thumbnail src='./assets/secondBoss.png' className="mainBossPhoto" alt="Second Boss">
                <h5 className="italic bold">замначальник</h5>
                <h5 className="bold">Ивановский Иван Иванович</h5>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>

        <div className="container"  style={{ paddingTop: '10px', marginTop : "10px"}}>
          <p>Cras mattis egestas sem ac scelerisque. Curabitur venenatis vel sem nec lobortis. Proin in gravida nunc, eget finibus felis.
            Fusce hendrerit malesuada rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>Aenean aliquet malesuada felis, in fringilla metus pellentesque quis. Sed augue arcu, pulvinar sit amet maximus et, molestie eget dui.
            Phasellus condimentum auctor diam in vestibulum.
          </p>
        </div>
        <div className="aboutPage-documents">
         <h3 style={{textAlign : "center"}}>Carousel</h3>
          <Slider {...settings}>
            <div><Image src={images[0]} onClick={this.openLightbox} /></div>
            <div><Image src={images[0]} onClick={this.openLightbox} /></div>
            <div><Image src={images[0]} onClick={this.openLightbox} /></div>
            <div><Image src={images[0]} onClick={this.openLightbox} /></div>
            <div><Image src={images[0]} onClick={this.openLightbox} /></div>
            <div><Image src={images[0]} onClick={this.openLightbox} /></div>
          </Slider>
          <Modal
            {...this.props}
            show={this.state.isOpen}
            onHide={this.closeLightbox}
            dialogClassName="custom-modal"
            bsSize="large"
            >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <Image  src={this.state.fImg} style={{ width: '100%'}} alt="img"/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeLightbox}>Закрыть</Button>
            </Modal.Footer>
          </Modal>
        </div>

        <MyOrderedList className="container aboutAdvantagesContainer" title="Какой-то список :" style={{ paddingTop: '10px', marginTop : "10px"}}/>
        <PageFooter />
      </div>
    );
  }
}
