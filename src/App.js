import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine'
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Snack from './Snack';

const snackDict = {
  guacamole: {
    imgUrl:'https://www.simplyrecipes.com/thmb/FBGUrWx7HOga2FATf3Cny3QAjXo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Guacamole-LEAD-1-47de4e6e47464daba88a7f42155a2af3.jpg', 
    altText:'Guacamole', 
    imageName:'guacamole'
  },
  chips: {
    imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/220px-Potato-Chips.jpg', 
    altText:'Chips', 
    imageName:'chips'
  },
  salsa: {
    imgUrl:'https://www.thehealthymaven.com/wp-content/uploads/2020/08/restaurant-salsa.jpg', 
    altText:'Salsa', 
    imageName:'salsa'
  }
};

function App() {
  return (
    <div className="App">
      <VendingMachine />
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> //see what happens if pass in exact prop, NavLink passes in the active class to anything link that MATCHES "/" if exact not included
          <NavLink exact to="/chips">Chips</NavLink>
          <NavLink exact to="/salsa">Salsa</NavLink>
          <NavLink exact to="/guac">Guac</NavLink>
        </nav>
        <Route exact path="/">
          
        </Route>
        <Route exact path="/chips">
          <Snack {...snackDict.chips}/>
        </Route>
        <Route exact path="/salsa">
          <Snack {...snackDict.salsa}/>
        </Route>
        <Route exact path="/guac">
          <Snack {...snackDict.guacamole}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
