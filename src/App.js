import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import s from './app.module.scss';
import ContinentAfrica from './pages/ContinentAfrica/ContinentAfrica';
import Cursor from './components/ui/Cursor/Cursor';
import InProgress from './pages/InProgress/InProgress';

const App = () => {
  return (
    <>
      <Cursor/>
      <div className={s.app}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/africa" element={<ContinentAfrica/>}/>
          <Route path="/inprogress" element={<InProgress/>}/>
        </Routes>
      </div>
    </>

  );
}

export default App;