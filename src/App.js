import './App.css';

import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
        
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </div>
      
    
  );
}

export default App;
