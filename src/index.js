import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Aone, Atwo} from './components/navvar/Topnav';

var errorpage = "Not Found";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate replace to="/nympheia"></Navigate>}></Route>
      <Route path='/nympheia' element={<App />}></Route>
      <Route path='/nympheia/feat' element={<Aone />}></Route>
      <Route path='/nympheia/price' element={<Atwo />}></Route>
      <Route path='/*' element={errorpage}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();