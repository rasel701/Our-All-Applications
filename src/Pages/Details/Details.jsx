import React, { useContext } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import download from "../../assets/assets/icon-downloads.png";
import rating from "../../assets/assets/icon-ratings.png";
import review from "../../assets/assets/icon-review.png";
import Rechartes from "../../Components/Rechartes/Rechartes";
import { AppSaveContext } from "../../AppContext/AppContext";
import appNotFound from "../../assets/assets/App-Error.png";
import useApps from "../../Hooks/useApps";
import Loading from "../../Components/Loading/Loading";

const Details = () => {
  const [install, setInstall, handleInstallBtn] = useContext(AppSaveContext);
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const { data } = useLoaderData();

  const isData = data.find((ele) => Number(ele.id) === Number(id));
  const navigate = useNavigate();

  if (!isData) {
    return (
      <div className="flex justify-center items-center mt-7">
        <div className="flex flex-col justify-center items-center">
          <img src={appNotFound} alt="" />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl text-center mt-4 font-bold">
              OPPS!! APP NOT FOUND
            </h2>
            <p className="text-lg text-gray-500 my-3">
              The App you are requesting is not found on our system. please try
              another apps
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
    );
  }
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
      {loading ? (
        <div className="my-30 max-h-screen">
          <Loading />
        </div>
      ) : (
        <div>
          <div>
            <div className="flex  gap-3 lg:gap-9 md:gap-6 flex-col lg:flex-row justify-center items-center">
              <div className="bg-white p-3  w-[250px] h-[200px] lg:w-[400px] lg:h-[270px]">
                <img
                  className=" w-full h-full object-contain"
                  src={image}
                  alt=""
                />
              </div>
              <div className=" w-full">
                <h2 className="text-[32px] font-bold">{title}</h2>
                <h3>
                  Developed by <span>{companyName}</span>
                </h3>
                <div className="border-t-1 mt-5"></div>
                <div className="flex justify-center items-center  gap-5 lg:gap-11 md:gap-11 mt-4 lg:justify-start">
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
      )}
    </div>
  );
};

export default Details;
