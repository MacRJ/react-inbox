export const checkMessage = (id) => {
  return {
    type: 'CHECK_MESSAGE',
    payload: id
  }
}
export const starMessage = (id) => {
  return {
    type: 'STAR_MESSAGE',
    payload: id
  }
}
export const selectAll = () => {
    return {
        type: 'ALL_MESSAGES_SELECTED',
        payload: messages
    }
};
export const read = (id) => {
  return {
    type: 'MESSAGE_READ',
    payload: id
  }
}
export const unRead = (id) => {
  return {
    type: 'MESSAGE_UNREAD',
    payload: id
  }
}
export const trash = (id) => {
  return {
    type: 'MESSAGE_DELETED',
    payload: id
  }
}
export const count = () =>{
  return {
    type: 'COUNT',
  }
}
export const label = (id) => {
  return {
    type: "LABEL",
    payload: id
  }
}
export const unLabel = (id) => {
  return {
    type: 'UNLABEL',
    payload: id
  }
}
