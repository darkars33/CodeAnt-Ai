import React from 'react';

const Error = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 Error</h1>
      <p className="text-lg text-gray-700 mb-6">
        The page you are looking for does not exist or the route is not implemented.
      </p>
      <button
        onClick={() => window.history.back()}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
