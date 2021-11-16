import './App.css';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink exact to="/">Home</NavLink> //see what happens if pass in exact prop, NavLink passes in the active class to anything link that MATCHES "/" if exact not included
          <Link to="/chips">Chips</Link>
          <Link to="/salsa">Salsa</Link>
          <Link to="/guac">Guac</Link>
        </nav>
        <Route exact path="/"></Route>
        <Route exact path="/chips"></Route>
        <Route exact path="/salsa"></Route>
        <Route exact path="/guac"></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
