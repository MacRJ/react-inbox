// functions
// Selecting Individual
getId = (id) => {
  return this.state.message.filter(mess => mess.id === id)[0]
}
// Selecting All
getAll = () => {
  return this.state.message
}

// Unread count
count = () => {
let data = this.state.message
let count = 0;
for(var i =0; i< data.length; i++){
if(data[i].read === false){
  count = count +1
}
}
  return count
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

// Select All messages
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
// changing label
label = (prop) => {
let data = this.state.message
for(var i =0; i< data.length; i++){
  if(data[i].selected === true){
    if(!data[i].labels.includes(prop)){
      data[i].labels.splice(1,0, prop)
      this.setState({
        data:data
      })
    }
    }
    }
}
// removing label
unLabel = (prop) => {
  let data = this.state.message
  for(var i =0; i< data.length; i++){
    if(data[i].selected === true)
      if(data[i].labels.includes(prop)){
        let selecFor = data[i].labels.filter(lab => lab !== prop)
        console.log('selecFor', selecFor)
          data[i].labels = [];
          data[i].labels = selecFor
          this.setState({
            data:data
          })
      }
}
}
