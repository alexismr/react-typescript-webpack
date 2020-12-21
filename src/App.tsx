
import logo from './logo.svg';
import './App.scss';
import Container from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          configuracion inicial
        </p>
        <Container />
      </header>
    </div>
  );
}

export default App;
