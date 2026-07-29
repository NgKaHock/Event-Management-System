import { useEffect,useState } from 'react';
import API from "./api";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";

function App() {

  return (

    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      
      <Route
        path="/events/:id"
        element={<EventDetail/>}
      />

   </Routes>
  );
}

export default App;
    
      
  
