import React, { useState } from 'react';
import axios from 'axios';

function GeneratePalette() {
  const [palette, setPalette] = useState([]);
  const [error, setError] = useState('');

  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setPalette(response.data.palette);
      setError('');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || 'Server error');
      } else if (error.request) {
        setError('No response received from server');
      } else {
        setError('Error setting up the request');
      }
    }
  };
  console.log(palette)
  return (
    <div className="generate-palette">
      <input type="file" onChange={(e) => handleDrop(e.target.files)} />
      {error && <p>{error}</p>}
    </div>
  );
}

export default GeneratePalette;
