import React from "react";
import "./App.css";
import Sidebar from "./SideBar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
