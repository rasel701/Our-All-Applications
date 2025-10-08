import React, { useContext, useEffect, useState } from "react";
import useApps from "../../Hooks/useApps";
import { IoMdArrowDropdown } from "react-icons/io";
import InstallationApp from "../../Components/InstallationApp/InstallationApp";
import { AppSaveContext } from "../../AppContext/AppContext";

const Installation = () => {
  const { apps, loading, error } = useApps();
  const [install, setInstall, handleclick] = useContext(AppSaveContext);
  const [installApp, setInstallApp] = useState([]);

  const filtaringData = apps.filter((ele) => installApp.includes(ele.id));

  const handleRemoveBtn = (id) => {
    const filterData = install.filter((ele) => ele !== id);
    setInstall(filterData);
    setInstallApp(filtaringData);
    localStorage.setItem("app", JSON.stringify(filterData));
  };

  useEffect(() => {
    const getInstall = JSON.parse(localStorage.getItem("app"));
    console.log(getInstall);
    if (getInstall) {
      setInstallApp(getInstall);
    }
  }, []);

  return (
    <div>
      <div className="mt-18">
        <h2 className="text-center text-[40px] font-bold">
          Your Installed Apps
        </h2>
        <p className="text-center text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center mt-10">
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
            <li>
              <a>High-Low:</a>
            </li>
            <li>
              <a>Low-High: </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4 pb-4">
        {filtaringData.map((data) => (
          <InstallationApp
            key={data.id}
            data={data}
            handleRemoveBtn={handleRemoveBtn}
          />
        ))}
      </div>
    </div>
  );
};

export default Installation;
