import React, { useContext } from "react";
import UserContext from "../contextApi/UserContext";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <div className="p-4 text-xl font-semibold text-gray-800">
          Hello {user.username}
        </div>
      ) : (
        <div className="p-4 text-center">
          <p className="text-lg text-gray-600 mb-2">Please login first</p>
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}

export default Profile;
