import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {RoomConsumer} from '../context'
import loading from './Loading'

export default function RoomContainer() {
 return (
  
  <div>
   hello from room container
   <RoomFilter/>
   <RoomList/>
  </div>
 )
}
