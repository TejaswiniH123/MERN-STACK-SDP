import React, { useState } from "react";   // ✅ FIXED import

function Counter() {
  // useState Hook: count is the variable, setCount updates it
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">Count: {count}</h1>
          <div className="btn-group">
            <button
              className="btn btn-danger"
              onClick={() => setCount(count - 1)}
            >
              -1
            </button>
            <button
              className="btn btn-success"
              onClick={() => setCount(count + 1)}
            >
              +1
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
