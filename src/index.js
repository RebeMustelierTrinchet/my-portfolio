import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Layout from './pages/layout/layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from './pages/home/home';
import  RebecaComponent from './pages/Rebeca/rebeca';
import Layout from './pages/layout/layout';
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from './pages/portfolio/portfolio';
import Contact_Component from './pages/contact/contact';


const rootElement = document.getElementById("root");
render(
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about_me" element={<RebecaComponent/>} />
        <Route exact path="/portfolio" element={<Portfolio/>} />
        <Route exact path="/contact_us" element={<Contact_Component/>} />
      </Routes>
    </Layout>
  </Router>,
  rootElement
);


reportWebVitals();
