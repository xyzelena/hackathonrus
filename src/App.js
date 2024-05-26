import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Blog from './components/Blog';
import Participants from './components/Participants';
import PastHackathons from './components/PastHackathons';
import Teams from './components/Teams';
import NotFound from './components/NotFound';
import Card from './components/parts/Card';
import CardTeam from './components/parts/CardTeam';

import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App" id='app'>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='blog' element={<Blog />} />

            <Route path='participants' element={<Participants />} />
            <Route path='participants/card' element={<Card />} />
            <Route path='participants/card/cardTeam' element={<CardTeam />} />

            <Route path='pastHackathons' element={<PastHackathons />} />
            <Route path='pastHackathons/card' element={<Card />} />
            <Route path='pastHackathons/cardTeam' element={<CardTeam />} />
            <Route path='pastHackathons/card/cardTeam' element={<CardTeam />} />

            <Route path='teams' element={<Teams />} />
            <Route path='teams/cardTeam' element={<CardTeam />} />

            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
