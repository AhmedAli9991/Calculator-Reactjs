import React from 'react';
import Navigation from './Components/navigation';
import Calculator from './Components/Calculator';
import Header from'./Components/Header';
import Footer from'./Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import About from './Components/About';
function App() {
  return (
    <React.Fragment>
    <Router>
     <Navigation />
     <Switch>
     <Route exact path="/">
     <Header />
     <Calculator />
     </Route>
      <Route exact path="/About">
        <About />
      </Route>
      </Switch>
       <Footer />
    </Router>
    </React.Fragment>
  );
}

export default App;