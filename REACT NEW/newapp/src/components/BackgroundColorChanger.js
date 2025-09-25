import React, { useState, useEffect } from "react";

function BackgroundColorChanger() {
  const [bgColor, setBgColor] = useState("#ffffff");

  // Function to generate random hex color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    // Change color every 2 seconds
    const interval = setInterval(() => {
      const newColor = getRandomColor();
      setBgColor(newColor);
      document.body.style.backgroundColor = newColor;
    }, 2000);

    // Cleanup on component unmount
    return () => {
      clearInterval(interval);
      document.body.style.backgroundColor = "#ffffff"; // reset
    };
  }, []);

  return (
    <div className="text-center mt-5">
      <h2 className="text-white">Auto Background Color Changer</h2>
      <p className="text-white">
        Current Color: <strong>{bgColor}</strong>
      </p>
    </div>
  );
}

export default BackgroundColorChanger;
