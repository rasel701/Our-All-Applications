import React from "react";
import download from "../../assets/assets/icon-downloads.png";
import rating from "../../assets/assets/icon-ratings.png";
import { Link, useNavigate } from "react-router";

const SingleApp = ({ data }) => {
  const { id, title, image, downloads, ratingAvg } = data;
  const navigate = useNavigate();
  return (
    <Link
      to={`/details/${id}`}
      className="card bg-base-100 min-w-60 shadow-sm p-3"
    >
      <figure className="h-52">
        <img
          className="h-full object-cover rounded-lg"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className=" flex justify-between mt-2 items-center">
          <div className="flex gap-2 bg-[#F1F5E8] p-2.5 rounded-lg text-[#00D390] items-center">
            <img className="w-[18px] h-[18px]" src={download} alt="" />
            <p className="text-[16px]">{downloads}</p>
          </div>
          <div className="flex gap-2 p-2.5 bg-[#F1F5E8] text-[#FF8811] rounded-lg items-center">
            <img className="w-[18px] h-[18px]" src={rating} alt="" />
            <p className="text-[16px]">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
