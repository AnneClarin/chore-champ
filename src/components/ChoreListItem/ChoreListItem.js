import "./ChoreListItem.css";
import { useState } from "react";
import {deleteChore} from '../../utilities/chores-service'

export default function ChoreListItem({name, frequency, duration, completed, changeChoreStatus, chore, trigger, setTrigger}) {

    function handleDelete(chore) {
        deleteChore(chore)
        console.log(chore)
        setTrigger(!trigger)
    };

    function textStyle() {
        if (completed) {
          return { textDecoration: "line-through", textDecorationColor: "red", listStyleType: "disc" };
        } else {
          return { textDecoration: "none", listStyleType: "circle"};
        }
      };
  
    return (
    <div className="ChoreListItem">
      <li style={textStyle()}>
        <b>{name}</b>
        <p>- Reoccurs {frequency} <span className="first">|</span><span className="second">|</span> Takes {duration} minutes</p>
        <button className="completedButton" onClick={() => changeChoreStatus(chore)}>{completed ? "🔙" : "✔"}</button>
        <button className="completedButton" onClick={() => handleDelete(chore)}>❌</button>
      </li>
    </div>
  );
};