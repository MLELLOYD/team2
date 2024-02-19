
import React, { useState } from 'react';
import Webcam from 'react-webcam';
import logo from './logo.png'; // Make sure the path matches the location of your logo file
import {useNavigate } from 'react-router-dom'; 

function App() {
  const webcamRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const navigate = useNavigate();

  // Dummy functions for button clicks
  const handleButtonClick2 = () => alert('Button 2 clicked');

  // Function to capture image from webcam
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  // Styles for the webcam container
  const webcamStyle = {
    width: '100%',
    height: 'auto',
  };
  const handleButtonClick3 = () => {
    navigate('/about'); // Use navigate to change the route
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={logo} alt="Clinic Logo" style={{ maxWidth: '100px', height: '100px' }} />
      <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={webcamStyle}
          videoConstraints={{
            width: 1280,
            height: 720,
            aspectRatio: 16 / 9,
          }}
        />
      </div>
      <div>
        <button onClick={handleButtonClick2}>Analyze</button>
        <button onClick={handleButtonClick3}>Send Result</button>
        <button onClick={captureImage}>Capture</button> {/* Add this button for capturing the image */}
      </div>
      {capturedImage && (
        <div>
          <h2>Captured Image</h2>
          <img src={capturedImage} alt="Captured" style={{ width: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}

export default App;

