import React from 'react';
import Webcam from 'react-webcam';

function App() {
  const webcamRef = React.useRef(null);

  // Dummy functions for button clicks
  const handleButtonClick1 = () => alert('Button 1 clicked');
  const handleButtonClick2 = () => alert('Button 2 clicked');
  const handleButtonClick3 = () => alert('Button 3 clicked');

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Name of the Clinic</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{ margin: 'auto' }}
      />
      <div>
        <button onClick={handleButtonClick1}>Button 1</button>
        <button onClick={handleButtonClick2}>Button 2</button>
        <button onClick={handleButtonClick3}>Button 3</button>
      </div>
    </div>
  );
}

export default App;
