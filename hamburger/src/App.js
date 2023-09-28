
import './App.css';
import Navbar from './components/Navbar';
import Footer from './Footer';
import Home from './Pages/Home'
import Menu from './Menu';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
