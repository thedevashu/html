import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyClass from "../src/class"
// import MyClass from "/class"  -->not working because class.js file was not found 
// import App, { Little, Big } from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <MyClass num={3} />
    </React.StrictMode>
    , document.getElementById('myroot'))

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Little></Little>
//     <App /> */}
//     <Big num={6} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
