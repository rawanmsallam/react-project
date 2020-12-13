import './App.css';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router , Switch, Route}from 'react-router-dom';
import Home from './components/HomePage/Home'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
      </Switch>
      <Footer/>
    </Router>
   
  );
}

export default App;
