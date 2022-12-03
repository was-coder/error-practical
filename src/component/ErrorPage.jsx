import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      {/* <div className="error-container"> */}
      <h1>Page is not available</h1>
      <Link className="links" to="/">
        Go back Home
      </Link>
      {/* </div> */}
    </>
  );
}

export default ErrorPage;
