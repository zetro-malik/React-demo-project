import logo from './logo.svg';
import './App.css';
import pic from './img.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h2>Umer sheik, tum humraay saat bahir Q ni atay? please batao?</h2>
        <img src={pic} alt='hello hello'  />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          blah blah blah 
        </a>
      </header>
    </div>
  );
}

export default App;
