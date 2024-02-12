import React from 'react';
import Webcam from 'react-webcam';
import './WebcamWithButtons.css'; // Make sure you have updated this CSS file

const WebcamWithButtons = () => {
  return (
    <div className="webcam-container">
      <div className="header">
        <img src="your-image-url-here.jpg" alt="Logo" className="logo"/>
        <p className="header-text">Your Text Here</p>
      </div>
      <Webcam className="webcam"/>
      <div className="buttons-container">
        <button className="action-button">Capture</button>
        <button className="action-button">Analyze</button>
        <button className="action-button">Send Result</button>
      </div>
    </div>
  );
};

export default WebcamWithButtons;


import React, { useState } from 'react';
import Webcam from 'react-webcam';
import logo from './logo.png'; // Make sure the path matches the location of your logo file

function App() {
  const webcamRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // Dummy functions for button clicks
  const handleButtonClick1 = () => alert('Button 1 clicked');
  const handleButtonClick2 = () => alert('Button 2 clicked');
  const handleButtonClick3 = () => alert('Button 3 clicked');

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

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={logo} alt="Clinic Logo" style={{ maxWidth: '200px', height: 'auto' }} />
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
        <button onClick={handleButtonClick1}>Button 1</button>
        <button onClick={handleButtonClick2}>Button 2</button>
        <button onClick={handleButtonClick3}>Button 3</button>
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


import React, { useState } from 'react';
import Webcam from 'react-webcam';
import logo from './logo.png'; // Make sure the path matches the location of your logo file

function App() {
  const webcamRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // Dummy functions for button clicks
  const handleButtonClick2 = () => alert('Button 2 clicked');
  const handleButtonClick3 = () => alert('Button 3 clicked');

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


