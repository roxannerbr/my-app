//import logo from './logo.svg';
import './app.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Genres from './components/Genres';
//import Database from './components/Database';

function App() {
  return (
    <div className="App">
      <Aside/>
      {/* <{header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>} */}
      {/* <Database/> */}
      <Genres/>
      <Footer/>
    </div>
  );
}

export default App;
