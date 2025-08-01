import React, { useState } from "react";
import { toast } from "react-toastify";

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        toast.success("Signed in successfully");
        window.location.href = "/";
      } else {
        toast.error(data.message || "Error occurred while signing in");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error occurred while signing in");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-900 to-black p-4">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl shadow-lg">
        {/* Left Side - Image/Message */}
        <div
          className="hidden w-1/2 bg-cover bg-center p-10 text-white md:block relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44')`,
          }}
        >

          <div 
            className="absolute inset-0" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          ></div>
          <div className="flex h-full flex-col justify-center relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center text-white drop-shadow-lg">
              Welcome Back
            </h2>
            <p className="text-lg text-center text-white drop-shadow-md">
              Sign in to continue your journey
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full bg-white p-8 md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-center text-black">
            Sign In
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              required
            />

            <input
              type="password"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              required
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-black"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-sm text-black hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-black px-4 cursor-pointer py-2 disabled:opacity-50 text-white transition hover:bg-gray-800"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            <div className="my-4 text-center text-sm text-gray-500">or</div>

            <button
              type="button"
              className="flex w-full items-center cursor-pointer justify-center gap-2 rounded border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Sign in with Google
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="/sign-up" className="text-green-600 hover:font-medium">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
