import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Hello from './components/Hello';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="App-logo" src="https://www.graphicpie.com/wp-content/uploads/2020/11/red-among-us-png.png" alt="logo"/>

        <p>
          Nay Hacker na ako! --Justin Tiu
        </p>
        <img src="https://c.tenor.com/CgGUXc-LDc4AAAAC/hacker-pc.gif" alt="hackerman"/>
          <Button/>
        <p>
        {Hello()}
        </p>
        <Employee/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
