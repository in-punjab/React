import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import NewsItems from './NewsItems';
// import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
  const [progress, setProgress] = useState(0)


    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="Science" pageSize={5} country="in" category="Science"/>}/>
          <Route path="/Business" element={<News setProgress={setProgress} key="Business" pageSize={5} country="in" category="Business"/>}/>
          <Route path="/Enteraiment" element={<News setProgress={setProgress} key="Enteraiment" pageSize={5} country="in" category="Enteraiment"/>}/>
          <Route path="/General" element={<News setProgress={setProgress} key="General" pageSize={5} country="in" category="General"/>}/>
          <Route path="/Health" element={<News setProgress={setProgress} key="Health" pageSize={5} country="in" category="Health"/>}/>
          <Route path="/Science" element={<News setProgress={setProgress} key="Science"pageSize={5} country="in" category="Science"/>}/>
          <Route path="/Sports" element={<News setProgress={setProgress} key="Sports" pageSize={5} country="in" category="Sports"/>}/>
          <Route path="/Technology" element={<News setProgress={setProgress} key="Technology" pageSize={5} country="in" category="Technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }

  export default App;
