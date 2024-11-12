import React, { useState, useEffect } from "react";

import SideBar from "./components/SideBar";
import MazeGrid from "./components/MazeGrid";
import "./App.css";


function App() {
	const [grid, setGrid] = useState([]);

	const [theme, setTheme] = useState("Light");

	const toggleTheme = (newTheme) => {
		console.log("Theme selected:", newTheme);
		setTheme(newTheme);
	};


	// Fetching the generated maze from Django Backend
	useEffect(() => { 
		const fetchMaze = async () => {
			try {
				const response = await fetch("http://localhost:8000/api/generate-maze/");
				const data = await response.json();
				setGrid(data.maze);
			} catch (error) {
				console.error("Error fetching the maze: ", error);
			}
		};

		fetchMaze();
	}, []);


	return (
		<div className = {`app-main-container ${theme}`}>
			<SideBar onThemeChange = {toggleTheme}/>
			<MazeGrid grid = {grid} theme = {theme}/>
		</div>
	);
}

export default App
