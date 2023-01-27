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

    function durationEdit() {
      let hours = Math.floor(chore.duration/60)
      if (chore.duration >= 60 && chore.duration < 120) {
        return `${hours} hr ${(chore.duration-(hours*60))} mins`
      } else if (chore.duration >= 120) { 
        return `${hours} hrs ${(chore.duration-(hours*60))} mins`
      } else if (chore.duration == 1) {
        return `${chore.duration} min`
      } else {
        return `${chore.duration} mins`
      }
    }
  
    return (
    <div className="ChoreListItem">
      <li style={textStyle()}>
        <b>{name}</b>
        <p>- {frequency} <span className="first">|</span><span className="second">|</span> Takes {durationEdit(chore.duration)}</p>
        <button className="completedButton" onClick={() => changeChoreStatus(chore)}>{completed ? "🔙" : "✔"}</button>
        <button className="completedButton" onClick={() => handleDelete(chore)}>❌</button>
      </li>
    </div>
  );
};