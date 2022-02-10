import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import App2 from './App2';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AppRoute from './day3/AppRout';
// import Hello from './day3/hello';
// import Img from './day3/Img';
// import Math from './day3/Math';
import { Provider } from 'react-redux';
import store from './day4/ReduxEx';
import App from './App';
import LoginStore from './day5/LoginStore';
// const rout = (<React.StrictMode>
//   <BrowserRouter>

//     <AppRoute></AppRoute>

//     <Routes>
//       <Route path='/math' element={<Math></Math>}></Route>
//       <Route exact path='/hello' element={<Hello></Hello>} />
//       <Route path='/img' element={<Img></Img>}></Route>
//     </Routes>

//   </BrowserRouter>

// </React.StrictMode>)

ReactDOM.render(<Provider store={LoginStore}>
  <App />
</Provider>, document.getElementById('root'))


// ReactDOM.render(<Provider store={store}>
//   <App></App>
// </Provider>, document.getElementById('root'))


// ReactDOM.render(
//   rout
//   , document.getElementById('root')
// )




// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <App2></App2>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
