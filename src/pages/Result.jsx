import React, { useState } from 'react';
import './Result.css'; // make sure to create a CSS file to style your dropdown

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    console.log(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggling} className="dropdown-button">
        Select Patient ▼
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li onClick={onOptionClicked("Patient 1")} className="dropdown-list-item">
            Patient 1
          </li>
          <li onClick={onOptionClicked("Patient 2")} className="dropdown-list-item">
            Patient 2
          </li>
          <li onClick={onOptionClicked("Patient 3")} className="dropdown-list-item">
            Patient 3
          </li>
        </ul>
      )}
    </div>
  );
}

export default About;
