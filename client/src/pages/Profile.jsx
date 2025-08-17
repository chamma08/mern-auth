import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Profile Settings
          </h1>

          <form className="space-y-6">
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <img
                  src={currentUser.profileImage}
                  className="h-32 w-32 rounded-full object-cover border-4 border-indigo-200 shadow-lg"
                  alt="Profile"
                />
                <button
                  type="button"
                  className="absolute bottom-0 right-0 cursor-pointer bg-indigo-600 text-white rounded-full p-2 shadow-lg hover:bg-indigo-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Click to change profile picture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  defaultValue={currentUser.username}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={currentUser.email}
                  placeholder="Enter email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter new password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg cursor-pointer font-medium hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-200 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Update Profile
            </button>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
            <button className="flex-1 bg-red-500 text-white py-3 px-6 rounded-lg font-medium cursor-pointer hover:bg-red-600 focus:ring-4 focus:ring-red-200 transition-all duration-200">
              Delete Account
            </button>
            <button className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg font-medium cursor-pointer hover:bg-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-200">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
