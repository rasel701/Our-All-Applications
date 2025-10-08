import React from "react";
import { useLoaderData, useLocation, useParams } from "react-router";
import download from "../../assets/assets/icon-downloads.png";
import rating from "../../assets/assets/icon-ratings.png";
import review from "../../assets/assets/icon-review.png";

const Details = () => {
  const { id } = useParams();
  const { data } = useLoaderData();
  const isData = data.find((ele) => Number(ele.id) === Number(id));
  const { title, image, downloads, ratingAvg, companyName, reviews, size } =
    isData;

  return (
    <div className="max-w-[90%] mx-auto my-20 pb-9">
      <div>
        <div className="flex gap-9  ">
          <div className="bg-white p-3  w-[400px] h-[290px]">
            <img className=" w-full h-full object-contain" src={image} alt="" />
          </div>
          <div className=" w-full">
            <h2 className="text-[32px]">{title}</h2>
            <h3>
              Developed by <span>{companyName}</span>
            </h3>
            <div className="border-t-1 mt-5"></div>
            <div className="flex  gap-11 mt-4">
              <div className="">
                <img src={download} alt="" />
                <h3>Downloads</h3>
                <p className="text-[27px] font-bold">{downloads}</p>
              </div>

              <div className="">
                <img src={rating} alt="" />
                <h3>Average Ratings</h3>
                <p className="text-[27px] font-bold">{ratingAvg}</p>
              </div>

              <div className="">
                <img src={review} alt="" />
                <h3>Total Reviews</h3>
                <p className="text-[27px] font-bold">{reviews}</p>
              </div>
            </div>

            <button className="bg-[#00D390] p-2 mt-8 rounded-md text-white font-bold">
              Install Now <span>({size} MB)</span>
            </button>
          </div>
        </div>
        <div className="border-t-1 mt-8"></div>
      </div>
    </div>
  );
};

export default Details;
