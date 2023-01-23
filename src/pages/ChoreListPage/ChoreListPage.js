import './ChoreListPage.css'

import * as userService from '../../utilities/users-service'

export default function ChoreListPage({user, setUser}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null)
  };
  
  return (
    <div>
      ChoreListPage
      <div className="user-stats">
        <h3>{user.name}'s Stats</h3>
      </div>
      <button type="submit" onClick={handleLogOut}>Log Out</button>
    </div>
  )
};