import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>Page is not available</h1>
      <Link to="/" className="links">
        Go Back Home
      </Link>
    </>
  );
}

export default ErrorPage;
