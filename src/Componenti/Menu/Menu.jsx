import React, { useState } from 'react';
import './Menu.css';

const Menu = ({ childToParent }) => {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    console.log("Handling click, index:", index);
    setSelected(index);
    childToParent(index);
  };

  return (
    <nav className="styled-navbar">
      <div
        className={`nav-item ${selected === 0 ? 'selected' : ''}`} 
        onClick={() => handleClick(0)} 
      >
        About
      </div>
      <div
        className={`nav-item ${selected === 1 ? 'selected' : ''}`} 
        onClick={() => handleClick(1)}
      >
        Project
      </div>
    </nav>
  );
};

export default Menu;

