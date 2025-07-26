import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white hover:text-gray-300">
          <h1 className="text-xl font-medium">
            <span className="text-gray-300 font-bold">MERN</span> Auth
          </h1>
        </Link>
        <ul>
            <li className="inline-block mr-4">
                <Link to="/sign-in" className="text-white hover:text-gray-300">
                Sign In
                </Link>
            </li>
            <li className="inline-block mr-4">
                <Link to="/sign-up" className="text-white hover:text-gray-300">
                Sign Up
                </Link>
            </li>
            <li className="inline-block">
                <Link to="/profile" className="text-white hover:text-gray-300">
                Profile
                </Link>
            </li>
        </ul>
      </div>
    </div>
  );
}
