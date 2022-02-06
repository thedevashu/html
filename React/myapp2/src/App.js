import logo from './logo.svg';
import './App.css';
import Name from './day1/Name';
import NameC from './day1/NameC';
import Calc from './day1/Calc';
import Datef from './day1/Datef';
import Checkbox from './day1/Checkbox';
import IncDec from './day1/IncDec';

function App() {
  return (
    <div className="App">
      <IncDec />
      <Checkbox />
      <Datef />
      <Calc />
      <NameC />
      <Name></Name>
    </div>
  );
}

export default App;
