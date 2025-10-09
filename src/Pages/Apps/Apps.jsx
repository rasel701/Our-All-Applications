import React, { Suspense, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import useApps from "../../Hooks/useApps";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import Loading from "../../Components/Loading/Loading";

const Apps = () => {
  const { apps, loading, error } = useApps();

  const [search, setSearch] = useState("");
  const str = search.trim().toLowerCase();
  const [searchLoading, setSearchLoading] = useState(false);

  const datas = str
    ? apps.filter((ele) => ele.title.toLowerCase().includes(str))
    : apps;

  console.log(datas);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setSearchLoading(true);

    setTimeout(() => {
      setSearchLoading(false);
    }, 400);
  };

  return (
    <div className="mx-15">
      {loading ? (
        <div className="my-30 max-h-screen">
          <Loading />
        </div>
      ) : (
        <div>
          <div className="mt-20 mb-10">
            <h2 className="text-[48px] text-center font-bold">
              Our All Applications
            </h2>
            <p className="text-center text-[#627382]">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="flex  justify-between items-center">
            <h2 className="text-[24px]  font-bold">
              ({apps.length}) Apps Found
            </h2>
            <div className="relative w-full max-w-sm">
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

              <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search Apps"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
              />
            </div>
          </div>
          <div className="my-12">
            {datas.length !== 0 ? (
              searchLoading ? (
                <Loading />
              ) : (
                <TrendingApps datas={datas} />
              )
            ) : (
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-500">
                  No Apps Founds
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;

// <div className="mt-20 mb-10">
//   <h2 className="text-[48px] text-center font-bold">
//     Our All Applications
//   </h2>
//   <p className="text-center text-[#627382]">
//     Explore All Apps on the Market developed by us. We code for Millions
//   </p>
// </div>
// <div className="flex  justify-between items-center">
//   <h2 className="text-[24px]  font-bold">(120) Apps Found</h2>
//   <div className="relative w-full max-w-sm">
//     <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

//     <input
//       type="text"
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//       placeholder="Search Apps"
//       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
//     />
//   </div>
// </div>
// <div className="my-12">
//   <TrendingApps datas={datas} />
// </div>
