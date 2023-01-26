import './ChoreListPage.css';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import { changeChore } from '../../utilities/chores-service';
import * as choresAPI from '../../utilities/chores-api';
import ChoreListItem from "../../components/ChoreListItem/ChoreListItem"

export default function ChoreListPage({user, setUser}) {
  const [choresCompleted, setChoresCompleted] = useState([])
  const [choresIncomplete, setChoresIncomplete] = useState([])
  const [trigger, setTrigger] = useState(true)

  function handleLogOut() {
    userService.logOut();
    setUser(null)
  };



  async function changeChoreStatus(chore) {
    let choreCopy = {...chore};
    choreCopy.completed = !choreCopy.completed;
    await changeChore(choreCopy)
    setTrigger(!trigger)
  }

  useEffect(function() {
    async function getChores() {
    const chores = await choresAPI.getAll()
    const choresCompletedTemp = chores.filter(chore => chore.completed == true)
    const choresIncompleteTemp = chores.filter(chore => chore.completed == false)
    console.log(choresCompletedTemp)
    setChoresCompleted(choresCompletedTemp)
    setChoresIncomplete(choresIncompleteTemp)
    }
    getChores()
  }, [trigger]);


  const choresCompletedEls = choresCompleted.map((chore, idx) => (
    <ChoreListItem
      name={chore.name}
      frequency={chore.frequency}
      duration={chore.duration}
      completed={chore.completed}
      key={idx}
      changeChoreStatus={changeChoreStatus}
      chore={chore}
    />
  ))

  const choresIncompleteEls = choresIncomplete.map((chore, idx) => (
    <ChoreListItem
      name={chore.name}
      frequency={chore.frequency}
      duration={chore.duration}
      completed={chore.completed}
      key={idx}
      changeChoreStatus={changeChoreStatus}
      chore={chore}
    />
  ))

  // schedule.scheduleJob(interval, () => {
  //   if (chore.frequency.value = 'daily') {
  //     interval === '00***'
  //   } else if (chore.frequency.value = 'weekly') {
  //     interval === ''
  //   }
  // })
   
  return (
    <div className='ChoreListPage'>
      <div className="user-stats">
        <h1>{user.name}'s Stats</h1>
        <h3>Completed: {choresCompleted.length} Chores</h3>
        <button type="submit" onClick={handleLogOut}>Log Out</button>
      </div>
      <div className='chores-todo'>
        <h1>Today's Chores</h1>
        <ul>{choresIncompleteEls}</ul>
        <Link to="/chores/new"><button>Add Chore</button></Link>
      </div>
      <div className='completed-chores'>
        <h1>Completed Chores</h1>
        <ul>{choresCompletedEls}</ul>
        <Link to="/chores/past"><button>Past Chores</button></Link>
      </div>
    </div>
  )
};