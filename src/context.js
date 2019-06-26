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

 componentDidMount() {
  // this.getData
  let rooms = this.formatData(items);
  //console.log(rooms);
  let featuredRooms = rooms.filter(room => room.featured === true);
  this.setState({
   rooms, 
   featuredRooms, 
   sortedRooms: rooms, 
   loading: false
  })
 }

 formatData(items) {
  let tempItems = items.map(item => {
   let id = item.sys.id
   let images = item.fields.images.map(image => image.fields.file.url);

   let room = {...item.fields,images,id}
   return room;
  });
  return tempItems
 }

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