import './App.css';
import { useState } from "react";
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import ChoreListPage from "../ChoreListPage/ChoreListPage";
import AuthPage from "../AuthPage/AuthPage";
import NewChorePage from "../NewChorePage/NewChorePage";
import PastChoresPage from '../PastChoresPage/PastChoresPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [chores, setChores] = useState([])

  return (
    <main className="App">
      <Link to='/chores' className='AppLink'>
        <ul className='AppLinkText'>
          <li>C</li>
          <li>h</li>
          <li>o</li>
          <li>r</li>
          <li>e</li>
          <li>C</li>
          <li>h</li>
          <li>a</li>
          <li className='m'>m</li>
          <li>p</li>
        </ul>
        <div class="line"></div>
      </Link>
      { user ?
        <Routes>
          <Route path="/chores" element={<ChoreListPage user={user} setUser={setUser} chores={chores} setChores={setChores} />} />
          <Route path="/chores/new" element={<NewChorePage chores={chores} setChores={setChores} />} />
          <Route path="/chores/past" element={<PastChoresPage chores={chores} />} />
          <Route path="/*" element={<Navigate to="/chores" />} />        
        </Routes>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  )
};