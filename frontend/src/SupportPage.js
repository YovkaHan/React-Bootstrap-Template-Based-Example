import React from 'react';

import NavMain from './NavMain';
import PageFooter from './PageFooter';
import {Grid, Label, Row, Col, Image, Table, Modal, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import HeaderTitle from './HeaderTitle';
import LastQuestions from './LastQuestions';

class NameFormElement extends React.Component {
  render() {
    return (
      <div style={{marginTop: "5px"}}>
        <Col componentClass={ControlLabel} sm={2}>
          Имя
        </Col>
        <Col sm={10}>
          <FormControl type="text" onChange={this.props.nameChange} placeholder="Введите Имя ..." value={this.props.val} />
        </Col>
      </div>
    )
  }
}

class EmailFormElement extends React.Component {
  render() {
    return (
      <div style={{marginTop: "5px"}}>
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" onChange={this.props.emailChange} placeholder="Введите Email ..." value={this.props.val} />
        </Col>
      </div>
    )
  }
}

class QuestionFormElement extends React.Component {
  render() {
    return (
      <div style={{marginTop: "5px"}}>
        <Col componentClass={ControlLabel} sm={2}>
          Вопрос
        </Col>
        <Col sm={10}>
          <FormControl type="textarea"  componentClass="textarea" onChange={this.props.questionChange} placeholder="Введите вопрос ..." value={this.props.val} />
        </Col>
      </div>
    )
  }
}

export default class Page extends React.Component {
  state = {

  };
  clearForm = () => {
    this.setState({
      nameVal: '',
      emailVal: '',
      questionVal: ''
    });
  };
  nameChange = (event) => {
    this.setState({nameVal: event.target.value});
  };
  emailChange = (event) => {
    this.setState({emailVal: event.target.value});
  };
  questionChange = (event) =>  {
    this.setState({questionVal: event.target.value});
  };
  submit = (event) => {
    let self;

    event.preventDefault();
    self = this;

    console.log(this.state);

    let data = {
      name: this.state.nameVal,
      email: this.state.emailVal,
      question: this.state.questionVal
    };

    // Submit form via jQuery/AJAX
    $.ajax({
      type: 'POST',
      url: '/question_submit',
      data: data
    })
      .done(function(data) {
        this.clearForm()
      }.bind(this))
      .fail(function(jqXhr) {
        console.log('failed to register');
      });
  };
  render() {
    return (
        <div>
          <HeaderTitle className="app-header"/>
          <NavMain activePage="support" />

          <main className="app-masthead" id="content" role="main" style={{marginTop : "35px"}}>
            <div className="container">
              <p className="lead" style={{fontSize: "22px"}}>Хотите задать вопрос ?</p>
            </div>
          </main>

          <div className="container support-page-form-container">
            <p>Здесь можно задать любой вопрос на любую тему и быстро получить ответ.</p>
            <Grid>
              <Row>
                <Col md={4} lg={4}>
                  <Image src='./assets/question.jpg' style={{margin: "0 auto", display: "block"}}/>
                </Col>
                <Col md={8} lg={8}>
                  <div className="mainPageText textFormat" style={{overflow: "hidden"}}>
                    <Form horizontal onSubmit={this.submit}>

                      <NameFormElement key="007" nameChange={this.nameChange} val={this.state.nameVal} />
                      <EmailFormElement key="008" emailChange={this.emailChange} val={this.state.emailVal} />
                      <QuestionFormElement key="009" questionChange={this.questionChange} val={this.state.questionVal} />

                      <FormGroup>
                        <Col smOffset={2} sm={10}>
                          <Button type="submit">
                            Отправить
                          </Button>
                        </Col>
                      </FormGroup>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
          <LastQuestions className="container support-last-questions"/>

          <PageFooter />
        </div>
      );
  }
}
