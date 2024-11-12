import React from "react";

import "../MazeGrid.css";


function MazeGrid({ grid , theme}) {  // Accept grid as a prop
    return (
        <div className = "maze-grid">
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