import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Neabout from './components/Neabout/Neabout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <About />
        {/* <Neabout /> */}
      </header>
    </div>
  );
}

export default App;
