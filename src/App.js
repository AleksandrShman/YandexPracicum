import './App.css';
// import About from './components/About/About';
import Card from './components/Card/Card';
import Video from './components/Video/Video';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Video />
        {/* <About /> */}
      </header>
    </div>
  );
}

export default App;
