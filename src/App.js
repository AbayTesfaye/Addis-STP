import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
