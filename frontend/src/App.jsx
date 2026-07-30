import { useEffect,useState } from 'react';
import API from "./api";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import Register from "./pages/Register";  

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
      
      <Route
      path="/events/:id/register"
      element={<Register />}
       />

   </Routes>
  );
}

export default App;
    
      
  
