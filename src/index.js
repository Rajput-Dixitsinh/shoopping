import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { createRouter } from './App';
import store from './rredux/Store';
import { Provider } from 'react-redux';
import  App  from './App';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <BrowserRouter>

<Provider store={store}>
    <App/>
    <Toaster/>
   </Provider>
 </BrowserRouter>
   
  

);


