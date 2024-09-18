import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Monster from './components/pages/Monster/Monster';
import Weapons from './components/pages/Weapons/Weapons';
import Items from './components/pages/Items/Items';
import Hunts from './components/pages/Hunts/Hunts';
import Comments from './components/pages/Comments/Comments';
import NotFound from './components/pages/NotFound/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path='/monster' element={<Monster/>}/>
          <Route path='/weapons' element={<Weapons/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/hunts' element={<Hunts/>}/>
          <Route path='/comments' element={<Comments/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
