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


const rootElement = document.getElementById("root");
render(
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/" element={<RebecaComponent/>} /> */}
        <Route exact path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </Layout>
  </Router>,
  rootElement
);


reportWebVitals();
