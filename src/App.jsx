import { useState } from 'react';
import Nav from "./Nav/nav";
import './App.css';
import NavBar from './NavBar/navBar';
import Post from './Post/post';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-grid">
      <Nav />
      <div className="app-grid-sidebar">
        <NavBar />
      </div>
      <div className="app-grid-content">
        <Post />
      </div>
      <div className="app-grid-navbart">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
