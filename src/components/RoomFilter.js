import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

//get all unique values
const getUnique = (items, value) => {
 
}

export default function RoomFilter() {
 const context = useContext(RoomContext);
 //console.log(context);
 const {
  handleChange,
  type,
  capacity,
  price,
  minPrice,
  maxPrice,
  minSize,
  maxSize,
  breakfast,
  pets
 } = context;
 
 return (
  <section className="filter-container">
   <Title title="search rooms" />
   <form action="" className="filter-form">
    {/* select type */}
    <div className="form-group">
     <label htmlFor="type">room type</label>
     <select 
      name = "type" 
      id = "type" 
      value = {type}
      className = "form-control"
      onChange = {handleChange}
     >
      <option value="single">single</option>
      <option value="double">double</option>
     </select>
    </div>
    {/* end select type */}
   </form>
  </section>
 )
}
