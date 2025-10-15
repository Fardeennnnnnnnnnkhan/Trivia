import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2b2533] text-white px-4">
      {/* 404 Illustration Section */}
      <div className="relative flex flex-col items-center justify-center text-center">
        {/* Background blob */}
        <div className="absolute w-[250px] sm:w-[400px] md:w-[500px] h-[150px] sm:h-[250px] bg-[#d9c9a3] rounded-full blur-3xl opacity-30 top-1/2 -translate-y-1/2" />

        {/* 404 Text */}
        <h1 className="text-[100px] sm:text-[150px] md:text-[200px] font-extrabold text-[#4b3b58] z-10">
          404
        </h1>

        {/* Illustration People + Plants (simple shapes via CSS) */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-between px-10 sm:px-20 z-20">
          <div className="flex flex-col items-center">
            <div className="w-3 h-10 bg-[#4b3b58] rounded-md" />
            <div className="w-6 h-6 bg-yellow-400 rounded-full mt-1" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-3 h-10 bg-[#4b3b58] rounded-md" />
            <div className="w-6 h-6 bg-yellow-400 rounded-full mt-1" />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-16 text-center space-y-4 z-30">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Oops! Page not found
        </h2>
        <p className="text-gray-300 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <a
          href="/"
          className="mt-6 inline-block bg-yellow-400 text-[#2b2533] px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

