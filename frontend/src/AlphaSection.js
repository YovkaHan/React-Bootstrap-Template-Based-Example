import React from 'react';
import $ from 'jquery';
import {Table} from 'react-bootstrap';

const AlphaSection = React.createClass({
  getDefaultProps: function() {
    return {
    };
  },
  getInitialState(){
    return({
      displayed: [],
      pastSQ: ""
    });
  },
  componentDidUpdate() {
    if(this.props.searchQuery != this.state.pastSQ) {
      this.onDisplayedChange();
    }
  },
  onDisplayedChange: function(){
    let sQ = this.props.searchQuery.toLowerCase();
    if((this.props.title.toLowerCase().indexOf(sQ.toLowerCase()) != -1) || (this.props.searchQuery == '_&allInOne'))
    {
      this.setState({displayed: this.props.data, pastSQ: this.props.searchQuery});
    } else {
      let D = this.props.data.filter(function (elem) {
        if (elem.name.toLowerCase().indexOf(sQ) != -1) {
          return ({"name": elem.name, "cost": elem.cost})
        }
      });
      this.setState({displayed: D, pastSQ: this.props.searchQuery});
    }
  },
  onClickHandler: function(e){
  },
  render() {
    if (this.state.displayed.length > 0) {
      return (
        <div>
          <Table striped bordered condensed hover >
            <thead>
            <tr>
              {
                this.props.headLables.map(function (label) {
                  return (
                    <th>{label}</th>
                  )
                })
              }
            </tr>
            </thead>
            <tbody>
            <tr>
              <th colSpan="2" style={{textAlign : "center"}}>{this.props.title}</th>
            </tr>
            {
              this.state.displayed.map(function (elem) {
                return (
                  <tr>
                    <td>{elem.name}</td>
                    <td style={{minWidth : "100px"}}>{elem.cost}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </Table>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
});

export default AlphaSection;

