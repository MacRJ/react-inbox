import React from 'react'



const Message = (props) => {
console.log('Message', props)
const read = props.message.read
let star = props.message.starred
let message = props.message.subject
let labels = props.message.labels

// functions
// selecting labels
let label = labels.map((indiv, i) => <span className="label label-warning" key={i}>{indiv}</span>)
// selecting read or not read
function readSelected() {
let readVar = (read === true ? "read" : "unread")

return "message row " + readVar
}

return (
  <div className= {readSelected()}   >
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox" />
        </div>
        <div className="col-xs-2">
          <i className= {star === true ? "star fa fa-star" : "star fa fa-star-o"}></i>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
      {label}
      <a href="#">
        {message}
      </a>
    </div>
  </div>

)
}

export default Message
