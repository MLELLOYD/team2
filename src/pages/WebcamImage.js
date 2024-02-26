import React, { useState, useRef } from 'react'; // make sure to import useRef here
import Webcam from 'react-webcam';
import logo from './logo.png';
import { storage } from '../firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';

function App() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageCount, setImageCount] = useState(1); // Initialize a counter for image names

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    alert('Image successfully captured!'); // Alert user of successful capture
  };

  const uploadImageToFirebase = async () => {
    if (capturedImage) {
      const response = await fetch(capturedImage);
      const blob = await response.blob();
  
      // Use the imageCount state to create a dynamic file name
      const imageName = `Patient${imageCount}.jpg`;
      const storageRef = ref(storage, `patientImage/${imageName}`);
  
      // Upload the blob to Firebase Storage
      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log(`Uploaded a blob or file named ${imageName}!`);
        alert(`Image named ${imageName} successfully uploaded!`); // Alert user of successful upload
        setImageCount((prevCount) => prevCount + 1); // Increment the counter after upload
      }).catch((error) => {
        console.error("Error uploading file", error);
        alert('Failed to upload image.'); // Alert user of upload failure
      });
    } else {
      alert('No image captured to upload.'); // Alert if no image to upload
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={logo} alt="Clinic Logo" style={{ maxWidth: '100px', height: 'auto' }} />
      <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{
            width: 1280,
            height: 720,
            aspectRatio: 16 / 9,
          }}
        />
      </div>
      <div>
        <button onClick={uploadImageToFirebase}>Upload Image</button>
        <button onClick={captureImage}>Capture</button>
      </div>
    </div>
  );
}

export default App;
