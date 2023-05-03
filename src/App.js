import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Events from './Components/Events';
import Items from './Components/Items';
import Blog from './Components/Blog';
import Landing from './Components/Landing';
import Order from './Components/Order'
import Order_success from './Components/Order_success'
import Quickview from './Components/Quickview'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/landing-page' element={<Landing/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/order-success' element={<Order_success/>}/>
        <Route path='/quickview/:id' element={<Quickview/>}/>
      </Routes>
    </div>
  );
}

export default App;
