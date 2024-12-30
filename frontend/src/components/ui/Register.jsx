import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";
export default function Register() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = info;
    if (!name || !email || !password) {
      return handleError("Please fill all the fields");
    }
    try {
      const url = `${
        process.env.REACT_APP_BACKEND_URL || "http://localhost:5174"
      }/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      const res = await response.json();
      console.log(res);
      if (res.success) {
        handleSuccess(res.message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (res.error) {
        handleError(res.error?.details[0].message);
      } else if (!res.success) {
        handleError(res.message);
      }
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <section className="bg-background h-screen flex items-center justify-center relative">
      <div className="absolute top-0 left-0 text-white p-4 text-xl">
        📕BookNXT
      </div>
      <div className="bg-section-900 p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <i className="fas fa-user text-gray-500 mr-2"></i>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={info.name}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-envelope text-gray-500 mr-2"></i>
            <input
              type="email"
              id="email"
              name="email"
              value={info.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* <div className="mb-4 flex items-center">
            <i className="fas fa-mobile-alt text-gray-500 mr-2"></i>
            <input
              type="tel"
              id="mobileNumber"
              onChange={handleChange}
              value={info.mobileNumber}
              name="mobileNumber"
              placeholder="Mobile Number"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div> */}

          {/* <div className="mb-4 flex items-center">
            <i className="fas fa-user-circle text-gray-500 mr-2"></i>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div> */}

          <div className="mb-4 flex items-center">
            <i className="fas fa-lock text-gray-500 mr-2"></i>
            <input
              type="password"
              id="password"
              name="password"
              value={info.password}
              onChange={handleChange}
              placeholder="Password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* <div className="mb-4 flex items-center">
            <i className="fas fa-lock text-gray-500 mr-2"></i>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div> */}

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-200 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log in
          </Link>
        </p>
      </div>
      <ToastContainer />
    </section>
  );
}
