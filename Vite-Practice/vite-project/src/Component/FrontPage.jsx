import "./FrontPage.css";
import { useState, useEffect } from "react";
const FrontPage = () => {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [change, setChange] = useState(true);

  async function fetchTodo() {
    setLoading(true);
    setTodo(null);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/carts");
      if (!response.ok) {
        throw new Error("failed to fetch!");
      }
      const data = await response.json();
      setTodo(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="Container">
        <div className="container">
          <div className="body">
            <h1>API TESTER</h1>
            <p>The box below shows the API response</p>
            {change && (
              <button
                className="click"
                onClick={() => {
                  fetchTodo();
                  setChange(false);
                }}
              >
                Fetch!
              </button>
            )}
            {!change && (
              <button
                className="click"
                onClick={() => {
                  setTodo(null);
                  setError(null);
                  setChange(true);
                }}
              >
                Clear API!
              </button>
            )}
          </div>
          <div className="display-api-content">
            {loading && <p>Loading........</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {todo && (
              <>
                <div>
                  <h3>🛒 All Cart Contents</h3>
                  {todo.carts.map((cart) => {
                    return (
                      <p key={cart.id}>
                        User ID: {cart.userId} | Products: {cart.totalProducts}|
                      </p>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
