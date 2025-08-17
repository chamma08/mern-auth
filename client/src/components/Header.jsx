import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <h1 className="text-xl font-medium">
            <span className="text-blue-400 font-bold">MERN</span> Auth
          </h1>
        </Link>
        <div className="flex items-center">
          <li className="inline-block mr-4">
            <Link
              to="/profile"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              {currentUser ? (
                <img
                  src={currentUser.profileImage}
                  alt={currentUser.username}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <span>Sign In</span>
              )}
            </Link>
          </li>
          <li className="inline-block mr-4">
            <Link
              to="/sign-up"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              Sign Up
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="/profile"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              Profile
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}
