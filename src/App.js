import './App.css';
import About from './components/About/About';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card/>
        <About />
      </header>
    </div>
  );
}

export default App;
