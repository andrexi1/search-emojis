import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [valueEmoji, setValueEmoji]= useState('fruit')

  return (
    <div className="App">
      <Header />
      <Form setValueEmoji={setValueEmoji}/>
      <Result/>
      <h2>Main</h2>
      <Footer />
    </div>
  );
}

export default App;
