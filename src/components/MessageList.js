import React from 'react'
import Message from './Message'



class MessageList extends React.Component {

render(props) {

const message = this.props.messages.map((mess, i) =>

<Message
  key= {i}
  id = {mess.id}
  message= {mess}/>)

    return (
    <div>
      {message}
    </div>
  )
  }
}

export default MessageList
