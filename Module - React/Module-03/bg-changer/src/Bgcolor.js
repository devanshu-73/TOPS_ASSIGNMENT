import './App.css';
import { useState } from 'react';

function Bgcolor() {
  const colors = ['Red', 'Green', 'Blue', 'Violet', 'Yellow', 'Orange', 'Black'];
  const [selectedColor, setSelectedColor] = useState();
  const bgChange = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color;

    if (color === 'Yellow' || color === 'Violet') {
      document.getElementById('h1').style.color = 'black';
    } else {
      document.getElementById('h1').style.color = 'white';
    }
  };

  return (
    <>
      <div className="flex">
        <h1 id='h1'>Bg Changer</h1>
        <div>
          {colors.map((color) => (
            <button key={color} className={`btn${selectedColor === color ? ' selected' : ''}`}
              onClick={() => bgChange(color)} style={{ backgroundColor: selectedColor === color ? color : 'white' }}>
              {color}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bgcolor;
