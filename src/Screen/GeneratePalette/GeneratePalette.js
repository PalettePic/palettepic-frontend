import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './generatePalette.css';

const imageUrls = [
  {
    id: 1,
    image: 'https://cdn.openart.ai/published/6toPI0ns1miPllVtaMKm/ZvY0KwZp_VGKM_raw.jpg',
    paletteColors: ['#6A5ACD', '#B0C4DE', '#D3D3D3', '#8A2BE2', '#4B0082'],
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/b8/fc/71/b8fc7153c978823165f7b2879fd5114b.jpg',
    paletteColors: ['#FF6347', '#FFD700', '#ADFF2F', '#FF4500', '#FF1493'],
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/736x/9e/97/b5/9e97b52fbfb88cf7e496220b0eadaf2a.jpg',
    paletteColors: ['#4682B4', '#87CEEB', '#00BFFF', '#5F9EA0', '#1E90FF'],
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/736x/fd/a2/77/fda27748d52e85c09c38470430b8e803.jpg',
    paletteColors: ['#D2B48C', '#CD5C5C', '#F4A460', '#DEB887', '#A0522D'],
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/236x/ca/f3/d6/caf3d60ec2ea31622f87fd2925a8cf97.jpg',
    paletteColors: ['#FFD700', '#FF8C00', '#FF4500', '#FF6347', '#FF1493'],
  },
  {
    id: 6,
    image: 'https://i.pinimg.com/736x/e0/66/7d/e0667d0b4a08b55700077e8f458a5072.jpg',
    paletteColors: ['#FFDEAD', '#FAEBD7', '#F5DEB3', '#FFE4C4', '#FFDAB9'],
  },
];

function GeneratePalette() {
  const [currentImage, setCurrentImage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(imageUrls);
  }, []);

  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const uploadData = {
        id: data.length + 1,
        image: 'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg', // Hardcoded for now
        paletteColors: response.data.palette,
      };

      setData((prevData) => [...prevData, uploadData]);
      setCurrentImage(data.length);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error || 'Server error');
      } else if (error.request) {
        alert('No response received from server');
      } else {
        alert('Error setting up the request');
      }
    }
  };

  const handleImageChange = (direction) => {
    const newIndex = (currentImage + direction + data.length) % data.length;
    setCurrentImage(newIndex);
  };

  return (
    <div style={containerStyle}>
      <div className="left-container">
        <div style={imageStyle}>
          <h1 style={headerTextStyle}>Generate Palette</h1>
          <div style={{ height: '85%', width: '80%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, padding: 10 }}>
            <img src={data[currentImage]?.image} alt="Left" style={imgStyle} />
          </div>
        </div>
        <div style={rightContainerStyle}>
          <div style={topContainerStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => handleDrop(e.target.files)}
              />
              <label htmlFor="fileInput" style={buttonStyle}>
                Generate New Palette
              </label>
              <button title="Copy this palette" style={buttonStyle}>
                Copy
              </button>
            </div>
            <div style={carouselContainerStyle}>
							
              <button onClick={() => handleImageChange(-1)} style={carouselButtonStyle}>
                ‹
              </button>
              <button onClick={() => handleImageChange(1)} style={carouselButtonStyle}>
                ›
              </button>
            </div>
          </div>
          <div style={bottomContainerStyle}>
            {data[currentImage]?.paletteColors?.map((color, index) => (
							<div style={colorBoxStyle}>
              	<div key={index} style={{height:'80%', width:'100%', backgroundColor: color }} />
								<div style={{backgroundColor:'rgba(0,0,0,0.1)', padding:10}}>{color}</div>
							</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  width: '100vw',
  height: '100vh',
};

const headerTextStyle = {
  display: 'flex',
  maxWidth: '28%',
  margin: '1rem',
  marginLeft: '0rem',
  paddingTop: '1%',
  paddingLeft: '1%',
  paddingBottom: '1%',
  color: '#6b3636',
  fontWeigth: 'bold',
  fontSize: '1.5rem',
  textAlign: 'left',
  backgroundColor: '#e7b8d1',
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',
};

const imageStyle = {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '70%',
  backgroundColor: 'rgba(114, 110, 141, 0.5)',
};

const imgStyle = {
  width: '100%',
  height: '100%',
};

const rightContainerStyle = {
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
};

const topContainerStyle = {
  flex: '30%',
  backgroundColor: 'rgba(222, 156, 236, 0.5)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '0.5rem',
};

const bottomContainerStyle = {
  flex: '70%',
  backgroundColor: 'rgba(222, 216, 223, 0.542)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '1rem',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#6b3636',
  fontSize: '1.2rem',
  color: 'white',
  cursor: 'pointer',
};

const colorBoxStyle = {
  width: '120px',
  height: '35%',
  margin: 10,
	padding:10,
	backgroundColor:'white',
  borderRadius: '10px',
};

const carouselContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
};

const carouselButtonStyle = {
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '2rem',
  cursor: 'pointer',
  margin: '0 1rem',
};

export default GeneratePalette;
