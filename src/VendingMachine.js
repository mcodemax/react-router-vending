import React from "react";
import './VendingMachine.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Snack from "./Snack";

const VendingMachine = ({snackDict}) => {
    
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route exact={"true"} path="/" element={
                    <>
                    <nav>
                        <NavLink exact={"true"} to="/chips">Chips</NavLink>     
                        <NavLink exact={"true"} to="/salsa">Salsa</NavLink>
                        <NavLink exact={"true"} to="/guac">Guac</NavLink>
                        {/* <div>
                            <Link exact={"true"} to="/">Back to Front of Vending Machine</Link>
                        </div> */}
                    </nav>
                    <div>
                        <img src={`./vending-machine2.png`} alt={"idk"} width="500" height="600"></img>
                         {/* src link is in public folder. */}
                    </div>
                    </>
                }/>
                <Route exact={"true"} path="/chips" element={
                <>
                    <nav>
                        <div>
                            <Link exact={"true"} to="/">Back to Front of Vending Machine</Link>
                        </div>
                    </nav>
                    <Snack {...snackDict.chips}/>
                </>
                }/>
                <Route exact={"true"} path="/salsa" element={
                <>
                    <nav>
                        <div>
                            <Link exact={"true"} to="/">Back to Front of Vending Machine</Link>
                        </div>
                    </nav>
                    <Snack {...snackDict.salsa}/>
                </>
                }/>
                <Route exact={"true"} path="/guac" element={
                <>
                    <nav>
                        <div>
                            <Link exact={"true"} to="/">Back to Front of Vending Machine</Link>
                        </div>
                    </nav>
                    <Snack {...snackDict.guacamole}/>
                </>
                }/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

VendingMachine.defaultProps = {
    snackDict: {
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
    }
}

export default VendingMachine;