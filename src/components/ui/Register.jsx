export default function Register() {
  return (
    <section className="bg-background h-screen flex items-center justify-center relative">
      <div className="absolute top-0 left-0 text-white p-4 text-xl">
        📕BookNXT
      </div>
      <div className="bg-section-900 p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Sign Up
        </h2>

        <form>
          <div className="mb-4 flex items-center">
            <i className="fas fa-user text-gray-500 mr-2"></i>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-envelope text-gray-500 mr-2"></i>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-mobile-alt text-gray-500 mr-2"></i>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-user-circle text-gray-500 mr-2"></i>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-lock text-gray-500 mr-2"></i>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-lock text-gray-500 mr-2"></i>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-200 text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-500">
            Log in
          </a>
        </p>
      </div>
    </section>
  );
}
