import React from "react";
import Banner from "../../Components/Banner/Banner";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import { Link, useLoaderData } from "react-router";
import useApps from "../../Hooks/useApps";
import Loading from "../../Components/Loading/Loading";

const Home = () => {
  const { apps, loading, error } = useApps();
  const minimamEightData = apps.slice(0, 8);

  return (
    <div>
      {loading ? (
        <div className="my-30 max-h-screen">
          <Loading />
        </div>
      ) : (
        <div>
          <Banner />
          <div className="mt-20 mb-10">
            <h2 className="text-[48px] text-center">Trending Apps</h2>
            <p className="text-center text-[#627382]">
              Explore All Trending Apps on the Market developed by us{" "}
            </p>
          </div>
          <TrendingApps datas={minimamEightData} />
          <div className="mt-10 flex justify-center items-center ">
            <Link
              to={"/apps"}
              className=" gap-2 px-6 py-3 rounded-lg text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
            >
              Show All
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
