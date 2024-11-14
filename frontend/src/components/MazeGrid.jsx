import React from "react";

import "../MazeGrid.css";


function MazeGrid({ grid , theme}) {

    const boardStyleBorder = {
        border: (theme == "Light") ? 
            "1px solid black" :
            "1px solid white"
    }

    return (
        <div className = "maze-grid" style = {boardStyleBorder}>
            {grid.map((row, rowIndex) => (
                <div key = {rowIndex} className = "maze-row">
                    {row.map((cell, cellIndex) => (
                        <div key = {cellIndex} className = {`maze-cell ${cell.type} ${theme}`}>
                            {/* Optional: Render start, end, or other icons here based on cell.type */}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default MazeGrid;