import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Secondapp from './AppV1';
import Accordian from './Accordian';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <App/> */}
{/* <Secondapp/> */}
<Accordian/>
  </React.StrictMode>
);


