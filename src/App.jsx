import React from "react";

import SideBar from "./components/SideBar";
import MazeGrid from "./components/MazeGrid";
import "./App.css";


function App() {

  return (
    <div className = "app-main-container">
    	<SideBar />
		<MazeGrid />
	</div>
	);
}

export default App
