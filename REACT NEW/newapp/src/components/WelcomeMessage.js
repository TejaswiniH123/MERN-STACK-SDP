import React from "react";

function WelcomeMessage() {
  const userName = "John";
  const isLoggedIn = true;

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h2>Hello, {userName}!</h2>
          <p>Today's date: {new Date().toLocaleDateString()}</p>
          {isLoggedIn ? (
            <div className="alert alert-success">You are logged in!</div>
          ) : (
            <div className="alert alert-warning">Please log in</div>
          )}
          <button className="btn btn-primary mt-2">Click me!</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeMessage;
