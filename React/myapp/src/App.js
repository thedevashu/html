import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>Hello <h1>MANUS</h1></div>
  );
}
export function Big(params) {
  return (
    <div>Hello man{params.num}</div>
  )
}
function Little() {
  return (
    <div>I am <h4>Littel</h4></div>
  );
}

export { Little, App }
export default App;
