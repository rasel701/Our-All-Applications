import React, { useContext, useEffect, useState } from "react";
import useApps from "../../Hooks/useApps";
import { IoMdArrowDropdown } from "react-icons/io";
import InstallationApp from "../../Components/InstallationApp/InstallationApp";
import { AppSaveContext } from "../../AppContext/AppContext";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";

const Installation = () => {
  const { apps, loading, error } = useApps();
  const [install, setInstall, handleclick] = useContext(AppSaveContext);
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);

  const filtaringData = apps.filter((ele) => install.includes(ele.id));
  const sortedItem = ascending
    ? filtaringData.sort((a, b) => a.downloads - b.downloads)
    : descending
    ? filtaringData.sort((a, b) => b.downloads - a.downloads)
    : filtaringData;

  const handleRemoveBtn = (id, title) => {
    const filterData = install.filter((ele) => ele !== id);
    setInstall(filterData);
    localStorage.setItem("app", JSON.stringify(filterData));
    toast(`${title} un-installed from your Deice`);
  };

  const handleSort = (type) => {
    if (type === "ascending") {
      setAscending(true);
      setDescending(false);
    }
    if (type === "descending") {
      setDescending(true);
      setAscending(false);
    }
  };

  return (
    <div className="mt-20">
      {loading ? (
        <div className="my-30 max-h-screen">
          <Loading />
        </div>
      ) : (
        <div className="max-w-[90%] mx-auto">
          <div>
            <h2 className="text-center text-[40px] font-bold">
              Your Installed Apps
            </h2>
            <p className="text-center text-gray-500">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="flex justify-between items-center mt-10 flex-col gap-2 lg:flex-row">
            <h2 className="text-2xl font-bold">
              {filtaringData.length} Apps Found
            </h2>

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 ">
                Sory By Size <IoMdArrowDropdown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li onClick={() => handleSort("descending")}>
                  <a>High-Low:</a>
                </li>
                <li onClick={() => handleSort("ascending")}>
                  <a>Low-High: </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4 pb-4">
            {sortedItem.length === 0 ? (
              <h2 className="text-3xl text-center mt-7 font-bold text-purple-600 overflow-hidden whitespace-nowrap border-r-4 border-purple-600 animate-typing">
                No App Installed
              </h2>
            ) : (
              <div className="flex flex-col gap-4 mt-4 pb-4">
                {sortedItem.map((data) => (
                  <InstallationApp
                    key={data.id}
                    data={data}
                    handleRemoveBtn={handleRemoveBtn}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Installation;
