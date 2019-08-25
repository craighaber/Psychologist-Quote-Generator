import React from "react"

const QuoteBox = (props) => {
  return (
    <div id="quote-box" className ="container-fluid">
      <div id="quote-segment">
        <p id="text"></p>
        <p id="author"></p>
        <img id="photo" alt="" src=""/>
      </div>
    </div> 
  )
}

export default QuoteBox