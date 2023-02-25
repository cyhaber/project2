import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'


import PropertyContextProvider from './component/PropertyContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<PropertyContextProvider>
   <Router>
     <React.StrictMode>
      <App />
    </React.StrictMode>
    </Router>
</PropertyContextProvider>
 
   
);
