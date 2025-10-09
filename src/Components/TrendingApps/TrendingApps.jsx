import React from "react";
import SingleApp from "../SingleApp/SingleApp";

const TrendingApps = ({ datas }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5 max-w-[90%] mx-auto">
      {datas.map((data) => (
        <SingleApp key={data.id} data={data}></SingleApp>
      ))}
    </div>
  );
};

export default TrendingApps;
