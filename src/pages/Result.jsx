import React, { useState, useEffect } from 'react';
import './Result.css';
import { storage } from '../firebaseConfig';
import { ref, listAll } from 'firebase/storage';

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [patientNames, setPatientNames] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState("Select Patient"); // State to keep track of the selected patient

  useEffect(() => {
    fetchPatientNames();
  }, []);

  const fetchPatientNames = () => {
    const storageRef = ref(storage, 'patientImage/');

    listAll(storageRef)
      .then((res) => {
        const names = res.items.map((itemRef) => {
          const match = itemRef.name.match(/(patient\d+)/i);
          return match ? match[1] : null;
        }).filter(Boolean);

        setPatientNames(names);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    console.log(value);
    setSelectedPatient(value); // Update the selected patient state
    setIsOpen(false);
  };

  const onActionButtonClick = () => {
    console.log("Action button clicked");
    // Here, you can handle the action when the Send Result button is clicked
    // For instance, sending the result to the selected patient or handling other logic
  };

  return (
    <div className="dropdown-container">
      <div className="button-container">
        <button onClick={toggling} className="dropdown-button">
          {selectedPatient} ▼
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            {patientNames.map((name, index) => (
              <li key={index} onClick={onOptionClicked(name)} className="dropdown-list-item">
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="button-container">
        <button onClick={onActionButtonClick} className="dropdown-button">
          Send Result
        </button>
      </div>
    </div>
  );
}

export default About;
