import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import { fetchUsers } from './githubService.js';

function App() {
  return (
    <Router>
      <div>
        <h1>GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;