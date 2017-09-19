import React from 'react'
import Message from './Message'



class MessageList extends React.Component {

render(props) {
console.log('MessageList', props)
const message = this.props.message.map((mess, i) =>
<Message
  key= {i}
  id = {mess.id}
  message= {mess}
  checkMessage={this.props.checkMessage}
  starMessage={this.props.starMessage}/>)


    console.log('Messagelist', this.props.message)
    return (
    <div>
      {message}
    </div>
  )
  }
}

export default MessageList
