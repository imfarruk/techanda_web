import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  //   const navigate = useNavigate();
  return (
    <div>
      <p>Error 404</p>
      <Link to="/">Go Back to main Page</Link>
    </div>
  );
};

export default Error;
