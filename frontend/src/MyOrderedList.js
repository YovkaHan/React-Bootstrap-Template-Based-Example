import React from 'react';
import $ from 'jquery';
import list from '../assets/json/list.json';

const List = React.createClass({
  getInitialState(){
    return({
      hidden : " "
    });
  },
  onClickHandler: function(e){
    if(e.target.className.indexOf('hidden') == -1 ) {
      this.setState({hidden : " hidden"});
    } else {
      this.setState({hidden : " "});
    }
  },
  reverseHidden: function(){
    return((this.state.hidden.indexOf('hidden') == -1) ? 'hidden': " " );
  },
  render() {
    if(this.props.second != ' ') {
      return (
        <li>
          {this.props.first}<span><a className={'details '+this.state.hidden} onClick={this.onClickHandler} style={{cursor : 'pointer'}}>Подробнее</a></span>
          <span className={'details_text '+this.reverseHidden()}> {this.props.second}</span>
        </li>
      );
    } else {
      return (
      <li>
        {this.props.first}
      </li>
      )
    }
  }
});

const MyOrderedList = React.createClass({
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <h4>{this.props.title}</h4>
        <ol>
          {list.lists.map(function(li){
            return (
              <List key={li.id} first={li.first} second={li.second}/>
            );
          }.bind(this))}
          </ol>
      </div>
    );
  }
});

export default MyOrderedList;
