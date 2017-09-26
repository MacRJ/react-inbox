import React from 'react'



const Message = (props) => {
  console.log('MessageProp', this.props)

const read = props.message.read
let star = props.message.starred
let message = props.message.subject
let labels = props.message.labels
let select = props.message.selected



// functions
// selecting labels
let label = labels.map((indiv, i) => <span className="label label-warning" key={i}>{indiv}</span>)
// selecting read or not read
function readSelected() {
let readVar = (read === true ? "read" : "unread")
let selectVar = (select === true ? " selected" : "")
return "message row " + readVar + selectVar
}



return (
  <div className= {readSelected()}   >
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input
            type="checkbox"
            checked= {select === true ? "checked" : ""}
            onChange={(e) => {props.checkMessage(props.id)}}
            />
        </div>
        <div className="col-xs-2">
          <i className= {star === true ? "star fa fa-star" : "star fa fa-star-o"} onClick= {(e) => {props.starMessage(props.id)}}></i>
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
