import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import WatchHistory from './Pages/WatchHistory';
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/WatchHistory' element={<WatchHistory/>}/>
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
