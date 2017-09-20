import React from 'react'

class Toolbar extends React.Component {

render(props) {
// if any message is selected
function ifSelected(props) {
  let selected = props.find(selected => selected.selected === true)
  return selected
}
// checkBox
function selected(prop) {
  let every = prop.every(selected => selected.selected)
  let some = prop.some(selected => selected.selected)
if(every === true){
  return "fa fa-check-square-o"
} else if(some === true){
  return "fa fa-minus-square-o"
} else {
  return "fa fa-square-o"
}
}





  return (
    <div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge">2</span>
      unread messages
    </p>

    <button className="btn btn-default">
      <i className={selected(this.props.message)}
        onClick={(e) => {this.props.selectAll()}}></i>
    </button>

    <button className="btn btn-default"
      onClick={(e) => {this.props.read()}}>
      Mark As Read
    </button>

    <button className="btn btn-default"
      onClick={(e) => {this.props.unRead()}}>
      Mark As Unread
    </button>

    <select className="form-control label-select">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default">
      <i className="fa fa-trash-o"
        onClick={(e) => {this.props.trash()}}></i>
    </button>
  </div>
</div>
  )
}
}

export default Toolbar
