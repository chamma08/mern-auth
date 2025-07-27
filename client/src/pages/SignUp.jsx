import React, { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-900 to-black p-4">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl shadow-lg">
        {/* Left Side - Image/Message */}
        <div
          className="hidden w-1/2 bg-cover bg-center p-10 text-black md:block"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d')`,
          }}
        >
          <h2 className="text-4xl font-bold mb-4 justify-center text-center">Create your Demo Account</h2>
          <p className="text-lg"></p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full bg-white p-8 md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-center text-black">
            Sign Up
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="accent-black" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Accept Terms & Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded bg-black px-4 cursor-pointer py-2 text-white transition hover:bg-gray-800"
            >
              Sign Up →
            </button>

            <div className="my-4 text-center text-sm text-gray-500">or</div>

            <button className="flex w-full items-center cursor-pointer justify-center gap-2 rounded border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Sign up with Google
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/sign-in" className="text-green-600 hover:font-medium ">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
