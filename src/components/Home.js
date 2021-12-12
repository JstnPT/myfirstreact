import '../App.css';
import Button from './Button';
import Hello from './Hello';

function Home() {
  return (
    <div className="Home">
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

export default Home
