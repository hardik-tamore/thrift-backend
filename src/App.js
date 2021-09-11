import './App.scss';
import Container from './Container';
import ProductDetails from './Components/ProductDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  
  return (
    <Router>

<Switch>
          <Route path="/Add">
     <ProductDetails/>
     </Route>
     <Route path="/products">
     <Container/>
     </Route>
 </Switch>
    </Router>
  );
}

export default App;




