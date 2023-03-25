import React from 'react';
import './assets/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import 'boxicons';
import Main from './pages/main';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/*" element={<Main />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
