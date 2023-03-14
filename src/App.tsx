import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App(){
  return (
    <div>
      <h1>React is a library not a framework</h1>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
        <Link to="/Home">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  )
}