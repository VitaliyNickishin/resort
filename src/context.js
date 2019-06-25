import React, { Component } from 'react'
import PropTypes from 'prop-types'
import items from './data'


const RoomContext = React.createContext();
//<RoomContex.Provider value = {'Hello'}


class RoomProvider extends Component {

 state={
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true
 };
//get Data


 static propTypes = {
  prop: PropTypes
 }

 render() {
  return (
   <RoomContext.Provider value = {{...this.state}}>
    {this.props.children}
   </RoomContext.Provider>
  )
 }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };