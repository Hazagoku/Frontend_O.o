import './App.css';
import Formulario from './components/Formulario';
import VehicleCard from './components/VehicleCard';
import Maker_model from './components/Maker_model';
import CheckBox_MM from './components/CheckBox_MM';
import By_Year from "./components/By_Year";

//App.js
function App() {
  fetch('http://127.0.0.1:8000/cars/')
  .then(response => response.json())
  .then(data => console.log(data));
  return (
    <div className="App">
      <header className="App-header">
        <h1> Frontend </h1>
        <br/>
        <Formulario/>
        <br/>
        <Maker_model/>
        <br/>
        <By_Year/>
        <br/>
        <h1>Vehicle Card</h1>
        <VehicleCard/>
        <br/>
      </header>
    </div>
  );
}

export default App;
