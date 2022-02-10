import logo from './logo.svg';
import './App.css';
import Name from './day1/Name';
import NameC from './day1/NameC';
import Calc from './day1/Calc';
import Datef from './day1/Datef';
import Checkbox from './day1/Checkbox';
import IncDec from './day1/IncDec';
import ReduxComponent from './day4/ReduxComponent';
import Login from './day5/Login';
import AppRoute from './day3/AppRout';

function App() {

  return (<div>
    <Login></Login>
    <Name></Name>
  </div>)

  // return (
  //   <div className="App">
  // <ReduxComponent></ReduxComponent>
  //     <IncDec />
  //     <Checkbox />
  //     <Datef />
  //     <Calc />
  //     <NameC />
  //     <Name></Name>
  //   </div>
  // );
}

export default App;
