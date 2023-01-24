import "./NewChorePage.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addChore } from "../../utilities/chores-service";

export default function NewChorePage({chores, setChores}) {
  const [chore, setChore] = useState({
    name: '',
    frequency:'',
    duration: '',
    completed: false
  })
  
  let navigate = useNavigate();
  
  function handleChange(evt) {
    setChore({...chore,
      [evt.target.name]: evt.target.value,
    })
  };

  function handleSubmit(evt) {
    evt.preventDefault()
    addChore(chore)
    setChores([...chores, chore])
    navigate('/chores');
  }


  return (
    <div className="NewChorePage">
      <h1>Add A New Chore</h1>
      <div className='NewChoreForm'>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Chore</label>
            <input type="text" name="name" value={chores.name} onChange={handleChange} autoComplete="off" required />
            <label>Frequency</label>
            <input type="number" name="frequency" value={chores.frequency} onChange={handleChange} autoComplete="off" required />
            <label>Duration(mins)</label>
            <input type="number" name="duration" value={chores.duration} onChange={handleChange} autoComplete="off" required />
            <button type="submit">Add</button>
          </form>
        </div>
    </div>
  )
};
