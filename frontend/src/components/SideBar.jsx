import React, { useState } from "react";

import "../SideBar.css";


function SideBar({ onThemeChange }) {

	const handleThemeChange = (event) => {
		console.log("Radio button clicked:", event.target.value);
		onThemeChange(event.target.value);
	}

	const [formData, setFormData] = useState(
		{
			algorithm: "",
			option: ""
		}
	)

	console.log(formData.algorithm," ", formData.option)

	function handleChange(event) {
		setFormData(prevFormaData => {
			return {
				...prevFormaData,
				[event.target.name]: event.target.value
			}
		})
	}


    return (
        <div className = "sideBar">
        	<h3>PathFinder - Visualizer</h3>
			
			<form action="">
				<input 
					type = "radio" 
					name = "theme" 
					id = "light" 
					value = "Light"
					onChange = {handleThemeChange}
					defaultChecked
				/>
				<label htmlFor = "" style = {{paddingRight: "20px", paddingLeft: "10px"}}>Light</label>

				<input 
					type = "radio" 
					name = "theme" 
					id="dark" 
					value = "Dark" 
					onChange = {handleThemeChange}
				/>
				<label htmlFor = "" style = {{paddingLeft: "10px"}}>Dark</label>
			</form>

			<div>
				<form action = "">
					<label htmlFor = "">algorithms:</label>
					<select 
						name = "algorithm" 
						id = "algorithms" 
						value = {formData.algorithm} 
						onChange = {handleChange}
					>
						<option value = "">--Please choose an option--</option>
						<option value = "BFS">BFS</option>
						<option value = "DFS">DFS</option>
					</select>

					<br />

					<label htmlFor = "">maze options:</label>
					<select 
						name = "option" 
						id = "mazes" 
						value = {formData.option} 
						onChange = {handleChange}
					>
						<option value = "">--Please choose an option--</option>
						<option value = "maze 1">maze 1</option>
						<option value = "maze 2">maze 2</option>
						<option value = "auto">auto-generation</option>
					</select>
					
					<br />

					<input className = "button start-btn" type = "submit" value = "START"/>

					<br />

					<input className = "button reset-btn" type="reset" value = "RESET"/>
				</form>
			</div>
		</div>
    );
}

export default SideBar;