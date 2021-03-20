import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario';
import VehicleCard from './components/VehicleCard';
import Maker_model from './components/Maker_model';
import CheckBox_MM from './components/CheckBox_MM';

function App() {
  fetch('http://127.0.0.1:8000/cars/')
  .then(response => response.json())
  .then(data => console.log(data));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formulario/>
        <VehicleCard/>
        <Maker_model/>
        <CheckBox_MM/>
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
