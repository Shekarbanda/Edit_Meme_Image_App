
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Editpage from './pages/Editpage';

function App() {
  return (
    <>
   <h1>meme app</h1>
   <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/Editpage' element={<Editpage></Editpage>}/>
   </Routes>
   </>
  );
}

export default App;
