import React from 'react';
import $ from 'jquery';
import LOQ from '../assets/json/list_of_questions.json';

class Answer extends React.Component {
  render () {
    return(
      <div>
        {this.props.data.map(function(e){
          return(
            <p>{e}</p>
          )
        })}
      </div>
    )
  }
}

export default class LastQuestions extends React.Component {
  render() {
  return(
    <div className={this.props.className}>
      {
        LOQ.list.map(function(elem){
          return (
            <div style={{margin : "20px 1px", paddingLeft : "5px", border : "1px dashed black"}}>
              <h4 style={{fontWeight: "600"}}>{elem.question}<span style={{fontWeight: "100"}}>({elem.name})</span></h4>
              <Answer key={elem._id} data={elem.answer}/>
            </div>
          );
        }.bind(this))
      }
    </div>
  )
}
}
