import {combineReducers} from 'redux'
import messagesReducer from './reducer-messages'

const allReducers = combineReducers({
messages: messagesReducer,
messageFunc: reducer-messages
})

export default allReducers
