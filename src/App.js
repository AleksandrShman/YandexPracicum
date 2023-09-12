import './App.css';
import { Route, Routes } from 'react-router-dom'; 

import Card from './components/Card/Card';
import Star from './components/Star/Star';
import Video from './components/Video/Video';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Routes>
          <Route path='/' element={<Video />} />
          <Route path='/star' element={<Star />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
