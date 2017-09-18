import React from 'react'
import Message from './Message'



class MessageList extends React.Component {

render(props) {

const message = this.props.message.map((mess, i) => <Message key= {i} message= {mess} />)


    console.log('Messagelist', this.props.message)
    return (
    <div>
      {message}
    </div>
  )
  }
}

export default MessageList
