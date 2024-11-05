import React from "react";

import "../SideBar.css";


function SideBar() {

    return (
        <div className = "sideBar">
        	<h3>PathFinder - Visualizer</h3>

			<div>
				<form action = "">
					<label htmlFor = "">algorithms:</label>
					<select name = "" id = "algorithms">
						<option value = "">--Please choose an option--</option>
						<option value = "BFS">BFS</option>
						<option value = "DFS">DFS</option>
					</select>

					<br />

					<label htmlFor = "">maze options:</label>
					<select name = "" id = "mazes">
						<option value = "">--Please choose an option--</option>
						<option value = "maze 1">maze 1</option>
						<option value = "maze 2">maze 2</option>
						<option value = "maze 2">auto-generation</option>
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