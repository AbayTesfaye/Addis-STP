import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

function App(props) {
  const [songs, setSongs] = useState([]);

  return (
    <div className="App flex flex-col min-h-screen">
      <Header songs={songs} setSongs={setSongs} />
      <Card songs={songs} setSongs={setSongs} />
      <Footer />
    </div>
  );
}

export default App;
