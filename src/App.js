
import React from "react";
import {IconName } from "react-icons/fa";
import { ReactDOM } from "react-dom";
import PropTypes from 'prop-types';
import './App.css';
import reactIcon from 'react-icons/fa';
import ListGroup from "./ListGroup";
import Contact from "./Contact";
import { toHaveErrorMessage } from "@testing-library/jest-dom/matchers";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { mockComponent } from "react-dom/test-utils";
import { buildQueries } from "@testing-library/react";
import Card from "./Card";
import Data from "./Data";
import Navbar from "./Navbar";
import Hero from "./Hero";


function App() {
 
  const cards = Data.map(item => {
    return (
 <Card
 key = {item.id}
 item = {item}
 img = {item.CoverImg}
 rating ={item.stats.rating}
 reviewCount = {item.stats.reviewCount}
 price = {item.prices} 
 openSpots={item.openSpots}
 title ={item.title}

 //description ={item.description}
 //location ={item.location}
/>

    )
  })
return (
  <div>
   
    <Navbar />
    <Hero />
    {cards}
  </div>
)
}

//key = {item.id}
//img = {item.CoverImg}
//icon = {item.Imgicon}
//rating = {item.stats.rating}
////reviewCount = {item.stats.reviewCount}
//Location= {item.location}
//title ={item.title}
//price = {item.prices} 
//openSpots={item.openSpots}










  //const date = new Date ()
  //const hours = date.getHours () % 12


  //<div  className="Contacts">
     // <Contact 
     //img = "catphoto.jpg" height={150}
    // name = "Mr  Dean"
    // phone= '(212) 555-1234'
    // email =  "mr.dean@catnap.meow"  />

   //  <Contact 
   //  img = "cat.jpg" height={150}
   // name= "Mr Whiskterson"
   // phone = "(212) 345-2333)"
   // email = "mr.whiska@modu.meow"
   // />
    // <Contact 
    // img = "catphoto.jpg" height={200}
    // name= "Mr Williams"
    // phone= "(212) 343-0234"
    //email = 'mr.williams@catch.meow' />
    
    
    // <Contact
    // img = "cat.jpg" height={200}
    // name= "Mr smith"

    // phone= "(212) 555-3452" 
    // email = 'mr.smith@cattap.meow' />






    //</div>
     
  //note:props helps to make a component more useable.

    
  
   
//<div  className="Contacts">
     
  //<img src= "catphoto.jpg" height={150} />
   //  <h3>Mr dean</h3>
//<div className="info-group" >
//<p> (212) 555-1234</p>
////</div> 

//<div className="info-group" >
//<p>mr.whiskaz@catnap.meow</p>
//</div>
//</div>


//<div className="contact-card">
//<img src=  "logo192.png"/>
//<h3> fluffykins</h3>

//<div className="info-group">
//<p>mr.whiskaz@catnap.meow</p>

//<div>

//<img src= "catphoto.jpg" height={150} />
 //    <h3>Mr dean</h3>
//<div className="info-group" >
//<p> (212) 555-1234</p>
//</div> 
//</div>
  
 
 //<ListGroup />






export default App;