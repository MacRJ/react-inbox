import {combineReducers} from 'redux'
import messagesReducer from './reducer-messages'

const allReducers = combineReducers({
messages: messagesReducer
})

export default allReducers
