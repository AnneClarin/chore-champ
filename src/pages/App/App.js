import './App.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import ChoreListPage from "../ChoreListPage/ChoreListPage";
import AuthPage from "../AuthPage/AuthPage";
import NewChorePage from "../NewChorePage/NewChorePage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      ChoreChamp
      { user ?
        <Routes>
          <Route path="/" element={<ChoreListPage user={user} setUser={setUser} />} />
          <Route path="/chores/new" element={<NewChorePage/>} />
        </Routes>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  )
};