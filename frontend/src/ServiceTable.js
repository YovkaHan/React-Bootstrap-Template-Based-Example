import React from 'react';
import $ from 'jquery';
import {Table} from 'react-bootstrap';
import Alpha from './Alpha';
import LOS from '../assets/json/list_of_services.json';

let dataToDisplay = LOS.lists.map(function(word){
  return ({"_id": word._id , "title": word.type, "data": word.services});
});

let lables = ["Название", "Цена"];

const ServiceTable = React.createClass({
  getDefaultProps: function() {
    return {
    };
  },
  getInitialState(){
    return({
      searchQuery : "",
      ready : " hidden"
    });
  },
  componentWillMount: function() {
  },
  changeReady: function(res) {
    console.log("HI");
    if (res == true) {
      this.setState({ready : " "});
    } else {
      this.setState({ready : " hidden"});
    }
  },
  setInputText: function() {
    this.setState({searchQuery: this.myTextInput.value});
  },
  displayAll: function() {
    this.setState({searchQuery: "_&allInOne"});
  },
  onButtonClickHandler: function(e){
  },
  render() {
    return(
      <div className={this.props.className+" "}>
        <div>
          <input  className="services-input" type="text" placeholder=" Название услуги" ref={(ref) => this.myTextInput = ref}/>
          <button  onClick={this.setInputText}>Поиск</button>
          <button  onClick={this.displayAll}>Показать весь список</button>
          <span className={"service-table-state"+this.state.ready} style={{color : "green", margin : "5px"}}>Ready</span>
        </div>
        <Alpha key={"a004"} className="Alpha" dataToDisplay={dataToDisplay} ready={this.changeReady} searchQuery={this.state.searchQuery} lables={lables}/>
      </div>
    );
  }
});

export default ServiceTable;
