import "./ChoreListItem.css"

export default function ChoreListItem({name, frequency, duration, completed, changeChoreStatus, chore}) {
    function textStyle() {
        if (completed) {
          return { textDecoration: "line-through" };
        } else {
          return { textDecoration: "none" };
        }
      };
  
    return (
    <div>
        <div>
            <li style={textStyle()}>{name}</li>
            <button id="completedButton" onClick={() => changeChoreStatus(chore)}>{completed ? "x" : "✓"}</button>
        </div>
        <div>
            <li>{frequency}</li>
            <li>{duration}</li>
        </div>
    </div>
  );
};