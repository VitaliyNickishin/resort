import React, { Component } from 'react'
import Title from "../components/Title"
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
 state={
  services:[
   {
    icon: <FaCocktail/>,
    title:"free cocktails",
    info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, omnis?'
   },
   {
    icon: <FaHiking/>,
    title:"Endless Hiking",
    info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, omnis?'
   },
   {
    icon: <FaShuttleVan/>,
    title:"Free shuttle",
    info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, omnis?'
   },
   {
    icon: <FaBeer/>,
    title:"Strongest Beer",
    info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, omnis?'
   },
  ]
 }
 render() {
  return (
   <section className="services">
    <Title title="services" />
    <div className="services-center">
     {this.state.services.map((item,index) =>{
      return
     }
      )}
    </div>
   </section>
  )
 }
}
