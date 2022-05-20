import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Banner} from "./components/Banner"
import { ContactsInfo, SocialMediaInfo } from './components/ContactInfo';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route path="/" index element={<App />}></Route>
        
        
        <Route path="/">
          <Route path="EditX"  element={<App edit={true} />} />
          <Route path="Banners" element={<Banner />}/>
          <Route path="Contacts" element={<ContactsInfo />}/>
          <Route path="SocialMedias" element={<SocialMediaInfo />} />
        </Route>
      </Routes>
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
