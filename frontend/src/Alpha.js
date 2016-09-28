import React from 'react';
import $ from 'jquery';
import AlphaSection from './AlphaSection'

const Alpha = React.createClass({
  /*getInitialState() {
    return({
      count : 0,
      reported : false
    })
  },*/
  /*ifReady : function(res){
    console.log("ifReady - "+res);
    this.setState({
      count : ++this.state.count
    });
    if(this.state.reported == false && res == true) {
      this.setState({
        reported : true
      });
      this.props.ready(res);
    }
    console.log(this.state.count);
  },*/
  /*componentWillUpdate() {
    if(this.state.count >= 8) {
      if(this.state.reported == false) {
        console.log("FALSE HERE");
        this.setState({
          count: 0, reported: false
        });
        this.props.ready(false);
      }
      this.setState({
        count: 0, reported: false
      })

    }
  },*/
  render() {
    return(
      <div>
        {
          this.props.dataToDisplay.map(function(section){
            let sQ = this.props.searchQuery;
            let hL = this.props.lables;
            return(
              <AlphaSection key={section.id} data={section.data} searchQuery={sQ} title={section.title} headLables={hL} handlerReady={this.ifReady}/>
            );
          }.bind(this))
        }
      </div>
    );
  }
});

export default Alpha;
