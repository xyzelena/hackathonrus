import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Blog from './components/Blog';
import Participants from './components/Participants';
import PastHackathons from './components/PastHackathons';
import Teams from './components/Teams';
import NotFound from './components/NotFound';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='blog' element={<Blog />} />
            <Route path='participants' element={<Participants />} />
            <Route path='pastHackathons' element={<PastHackathons />} />
            <Route path='teams' element={<Teams />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
