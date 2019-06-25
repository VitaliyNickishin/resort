import React, { Component } from 'react'
import PropTypes from 'prop-types'


const RoomContext = React.createContext();
//<RoomContex.Provider value = {'Hello'}


class RoomProvider extends Component {

 state={};

 static propTypes = {
  prop: PropTypes
 }

 render() {
  return (
   <RoomContext.Provider value = "hello">
    {this.props.children}
   </RoomContext.Provider>
  )
 }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContex };