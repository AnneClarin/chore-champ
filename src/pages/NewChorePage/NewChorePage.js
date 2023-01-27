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
    navigate('/chores/');
  }


  return (
    <div className="NewChorePage">
      <h1>Add A New Chore</h1>
      <div className='NewChoreForm'>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>
              Chore <br/>
              <input type="text" className="chore-input" name="name" value={chores.name} onChange={handleChange} autoComplete="off" required />
            </label>
            <label>
              Frequency <br/>
              <select name="frequency" value={chores.frequency} onChange={handleChange} required >
                <option value="Once" selected>Once</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </label>
            <label>
              Duration(mins) <br/>
              <input type="number" name="duration" value={chores.duration} onChange={handleChange} autoComplete="off" required />
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
    </div>
  )
};
