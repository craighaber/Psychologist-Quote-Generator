import React from "react";


class Buttons extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
    <div id="buttons-div">
       <button id="new-quote" type="button" className = "btn btn-lg button" onClick = {this.props.generateQuote}>Get More Insight</button>
       <a href = "" target = "_blank" id="tweet-quote"><i className= "fab fa-twitter fa-6x"></i></a> 
    </div>
    )
  }
  
}

export default Buttons;