import "./ChoreListItem.css";
import { useState } from "react";
import {deleteChore} from '../../utilities/chores-service'

export default function ChoreListItem({name, frequency, duration, completed, changeChoreStatus, chore, trigger, setTrigger}) {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true)
    };

    const handleMouseOut = () => {
        setIsHovering(false)
    };

    function handleDelete(chore) {
        deleteChore(chore)
        console.log(chore)
        setTrigger(!trigger)
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
            <button id="completedButton" onClick={() => changeChoreStatus(chore)}>{completed ? "❌" : "✔"}</button>
            <button onClick={() => handleDelete(chore)}>Delete</button>
        </div>
        {isHovering && (
            <div className="HoverText">
                <p>Reoccurs {frequency} | Takes {duration} minutes</p>
            </div>
        )}
    </div>
  );
};