import React, { useContext } from "react";
import { useLoaderData, useLocation, useParams } from "react-router";
import download from "../../assets/assets/icon-downloads.png";
import rating from "../../assets/assets/icon-ratings.png";
import review from "../../assets/assets/icon-review.png";
import Rechartes from "../../Components/Rechartes/Rechartes";
import { AppSaveContext } from "../../AppContext/AppContext";

const Details = () => {
  const [install, setInstall, handleInstallBtn] = useContext(AppSaveContext);
  const { id } = useParams();
  const { data } = useLoaderData();
  const isData = data.find((ele) => Number(ele.id) === Number(id));
  const {
    title,
    image,
    downloads,
    ratingAvg,
    companyName,
    reviews,
    size,
    ratings,
    description,
  } = isData;

  return (
    <div className=" my-20 pb-9">
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

            <button
              onClick={() => handleInstallBtn(isData.id, title)}
              className="bg-[#00D390] p-2 mt-8 rounded-md text-white font-bold cursor-pointer"
            >
              {install.includes(isData.id) ? (
                <p>Installed</p>
              ) : (
                <p>
                  Install Now <span>({size} MB)</span>
                </p>
              )}
            </button>
          </div>
        </div>
        <div className="border-t-1 mt-8"></div>
      </div>

      <div className="">
        <h2 className="mt-8 mx-5 text-lg font-bold">Ratings</h2>
        <Rechartes rating={ratings} />
      </div>
      <div className="border-t-1 text-gray-400 mt-5"></div>
      <div>
        <h2 className="text-2xl font-semibold mt-9 mb-3">Description</h2>
        <p className="text-[19px] text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Details;
