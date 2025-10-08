import React from "react";
import Banner from "../../Components/Banner/Banner";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import { useLoaderData } from "react-router";
import useApps from "../../Hooks/useApps";
import Loading from "../../Components/Loading/Loading";

const Home = () => {
  const { apps, loading, error } = useApps();
  const minimamEightData = apps.slice(0, 8);

  return (
    <div>
      {loading ? (
        <Loading />
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
        </div>
      )}
    </div>
  );
};

export default Home;
