import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import Navigations from "./components/Navigations";

function App() {
  return (
      <>
          <Navigations />
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/favorites' element={<FavoritesPage />} />

          </Routes>
      </>

  );
}

export default App;
