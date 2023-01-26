import "./ChoreListItem.css";
import { useState } from "react";

export default function ChoreListItem({name, frequency, duration, completed, changeChoreStatus, chore}) {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true)
    };

    const handleMouseOut = () => {
        setIsHovering(false)
    };

    function textStyle() {
        if (completed) {
          return { textDecoration: "line-through" };
        } else {
          return { textDecoration: "none" };
        }
      };
  
    return (
    <div className="ChoreListItem">
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="HoverMainText">
            <li style={textStyle()}>{name}</li>
            <button id="completedButton" onClick={() => changeChoreStatus(chore)}>{completed ? "❌" : "✓"}</button>
        </div>
        {isHovering && (
            <div className="HoverText">
                <li>Reoccurs every {frequency}</li>
                <li>Takes {duration} minutes</li>
            </div>
        )}
    </div>
  );
};