import './App.css';
import { useState } from "react";
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import ChoreListPage from "../ChoreListPage/ChoreListPage";
import AuthPage from "../AuthPage/AuthPage";
import NewChorePage from "../NewChorePage/NewChorePage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [chores, setChores] = useState([])

  return (
    <main className="App">
      <Link to='/chores' className='AppLink'>
          <h1 className='Chore'>
            Chore
            <div className="line"></div>
          </h1>
          <h1 className='Champ'>Champ</h1>
      </Link>
      { user ?
        <Routes>
          <Route path="/chores" element={<ChoreListPage user={user} setUser={setUser} chores={chores} setChores={setChores} />} />
          <Route path="/chores/new" element={<NewChorePage chores={chores} setChores={setChores} />} />
          <Route path="/*" element={<Navigate to="/chores" />} />        
        </Routes>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  )
};