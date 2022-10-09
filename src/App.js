import logo from './logo.svg';
import './App.css';
import pic from './img.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h2>it is working...yessssssss</h2>
        <img src={pic} alt='hello hello'  width={300} height={300}/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Eshan Ayasti <br></br>
         taray zameen par
        </a>
      </header>
    </div>
  );
}

export default App;
