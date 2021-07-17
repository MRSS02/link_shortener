import logo from './logo.svg';
import './App.css';
import shortener from "./services/api"
import axios from "axios"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Shortener from "./components/Shortener"
import PageInfo from "./components/PageInfo"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {



  return (
    <div className="App">
      <Navbar />
      <Header />
      <Shortener />
      <PageInfo />
      <Footer />
    </div>
  );
}

export default App;
