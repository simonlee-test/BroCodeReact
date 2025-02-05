import { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState<string>('#FF0011');

  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          Selected Color: {color}
        </div>
        <label>Select a Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </>
  );
};

export default ColorPicker;
