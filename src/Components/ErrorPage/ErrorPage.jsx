import React from "react";
import errorImage from "../../assets/assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center p-2">
      <div className="flex justify-center items-center mt-7">
        <div className="flex flex-col justify-center items-center">
          <img src={errorImage} alt="" />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl text-center mt-4 font-bold">
              Oops, page not found!
            </h2>
            <p className="text-lg text-gray-500 my-3">
              The page you are looking for is not available.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2  p-3 rounded-lg text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
            >
              Go Back!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
