import "./App.scss";
import Container from "./Container";
import ProductDetails from "./Components/ProductDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/Add">
          <ProductDetails />
        </Route>
        <Route path="/AddUser">
          <UserDetails/>
        </Route>
        <Route path="/products">
          <Container />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
