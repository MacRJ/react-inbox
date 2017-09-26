import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MessageList messages={this.props.messages}/>
      </div>

)
}
}
const mapStateToProps = state => ({
  messages: state.messages
  })


export default connect(
  mapStateToProps)(App)
