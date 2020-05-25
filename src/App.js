import React, { useState, useEffect } from "react";

function App() {
  const [position, setState] = useState({ x: "0px", y: "0px" });
  useEffect(() => {
    window.addEventListener("mousemove", (e) =>
      setState({ x: e.clientX + "px", y: e.clientY + "px" })
    );
  }, []);
  return (
    <div className="App">
      <img
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "relative",
        }}
        alt="lady"
        src="https://images.unsplash.com/photo-1483696765592-f49019d77f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
      />
      <div
        className="zoom"
        style={{
          width: "200px",
          height: "200px",
          background: "transparent",
          border: '2px solid',
          position: "absolute",
          top: position.y,
          left: position.x,
          transform: 'scale(1.3)'
        }}
      ></div>
    </div>
  );
}

export default App;
