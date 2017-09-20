import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'


class App extends Component {

state = {
  message: [
    {
      "id": 1,
      "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
      "read": false,
      "starred": true,
      "labels": ["dev", "personal"],
    },
    {
      "id": 2,
      "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
      "read": false,
      "starred": false,
      "selected": true,
      "labels": []
    },
    {
      "id": 3,
      "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
      "read": false,
      "starred": true,
      "labels": ["dev"]
    },
    {
      "id": 4,
      "subject": "We need to program the primary TCP hard drive!",
      "read": true,
      "starred": false,
      "selected": true,
      "labels": []
    },
    {
      "id": 5,
      "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
      "read": false,
      "starred": false,
      "labels": ["personal"]
    },
    {
      "id": 6,
      "subject": "We need to back up the wireless GB driver!",
      "read": true,
      "starred": true,
      "labels": []
    },
    {
      "id": 7,
      "subject": "We need to index the mobile PCI bus!",
      "read": true,
      "starred": false,
      "labels": ["dev", "personal"]
    },
    {
      "id": 8,
      "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
      "read": true,
      "starred": true,
      "labels": []
    }
  ]
}
// functions
// Selecting Individual
getId = (id) => {
  return this.state.message.filter(mess => mess.id === id)[0]
}
// Selecting All
getAll = () => {
  return this.state.message
}

// check single message
checkMessage = (id) => {
this.getId(id).selected = !this.getId(id).selected
this.setState({
  message: this.state.message
})
}

// star message
starMessage = (id) => {
  this.getId(id).starred = !this.getId(id).starred
  this.setState({
    message: this.state.message
  })
}

// star All messages
selectAll = () => {
  let some = this.state.message.some(selected => selected.selected)
  let every = this.state.message.every(selected => selected.selected)
  let data = this.state.message
  console.log('every',every)
if(every === false){
  for(var i =0; i < data.length; i++){
    data[i].selected = true
    this.setState({
      data:data
    })
  }
} else if(every === true) {
for(var i =0; i < data.length; i++){
  data[i].selected = false
  this.setState({
    data:data
  })
}
} else if(some) {
  for(var i =0; i< data.length; i++){
    data[i].selected = true
    this.setState({
      data:data
    })
  }
}
}

// Marking as read
read = () => {
let data = this.state.message
for(var i =0; i< data.length; i++){
  if(data[i].selected === true){
    data[i].read = true
    this.setState({
      data:data
    })
  }
}
}
// Marking Unread
unRead = () => {
let data = this.state.message
for(var i =0; i< data.length; i++){
  if(data[i].selected === true){
    data[i].read = false
    this.setState({
      data:data
    })
  }
}
}
// delete
trash = () => {
  console.log('trash')
  let data = this.state.message
  for(var i =0; i< data.length; i++){
    if(data[i].selected === true){
      data.splice(data[i], 1)
      this.setState({
        data:data
      })
    }
}
}
  render() {
    return (
      <div className="App">
        <Toolbar
          message={this.state.message}
          selectAll={this.selectAll}
          read={this.read}
          unRead={this.unRead}
          trash={this.trash}/>
        <MessageList
          message= {this.state.message}
          checkMessage= {this.checkMessage}
          starMessage= {this.starMessage}/>
      </div>
    );
  }
}

export default App;
