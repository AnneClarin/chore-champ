import './ChoreListPage.css';
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import * as choresAPI from '../../utilities/chores-api';
import ChoreListItem from "../../components/ChoreListItem/ChoreListItem"

export default function ChoreListPage({user, setUser, chores, setChores}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null)
  };

  useEffect(function() {
    async function getChores() {
    const chores = await choresAPI.getAll()
    setChores(chores)
    }
    getChores()
  }, []);

  let navigate = useNavigate();
  function routeChange() {
    let path = `/chores/new`;
    navigate(path)
  };

  const choresEls = chores.map((chore) => (
    <ChoreListItem
      name={chore.name}
      frequency={chore.frequency}
      duration={chore.duration}
      completed={chore.completed}
    />
  ))

   
  return (
    <div className='ChoreListPage'>
      <div className="user-stats">
        <h1>{user.name}'s Stats</h1>
        <button type="submit" onClick={handleLogOut}>Log Out</button>
      </div>
      <div className='completed-chores'>
        <h1>Completed Chores</h1>
      </div>
      <div className='chores-todo'>
        <h1>Chores To Do</h1>
        <ul>{choresEls}</ul>
        <button type="submit" onClick={routeChange}>Add Chore</button>
      </div>
    </div>
  )
};