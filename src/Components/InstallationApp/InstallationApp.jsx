import React, { useContext } from "react";
import download from "../../assets/assets/icon-downloads.png";
import rating from "../../assets/assets/icon-ratings.png";

const InstallationApp = ({ data, handleRemoveBtn }) => {
  const { title, image, downloads, ratingAvg, size, id } = data;
  return (
    <div className="flex justify-between items-center bg-white px-3 rounded-lg">
      <div className="flex gap-5 items-center">
        <div>
          <img
            className="w-[90px] h-[90px] object-contain"
            src={image}
            alt=""
          />
        </div>
        <div className="">
          <h2 className="text-[19px] font-bold mb-2">{title}</h2>
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center gap-2">
              <img className="w-[20px]" src={download} alt="" />
              <p className="text-[#00D390]">{downloads}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img className="w-[20px]" src={rating} alt="" />
              <p className="text-[#FF8811]">{ratingAvg}</p>
            </div>
            <p className="text-gray-500">{size} MB</p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemoveBtn(id, title)}
          className="bg-[#00D390] px-4 py-3 rounded-lg text-white cursor-pointer"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallationApp;
