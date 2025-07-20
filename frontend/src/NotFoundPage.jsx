import React from "react";
import { Link } from "react-router-dom";
function NotfoundPage() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        
        <h1 className="mt-5">Not foound Page</h1>
        <p>
      sorry, the page you are looking for does not exist. It might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
        <button
          className=" p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Go Home
        </button>
        </Link>
      </div>
    </div>
  );
}

export default NotfoundPage;
