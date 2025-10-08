import React from "react";
import SingleApp from "../SingleApp/SingleApp";

const TrendingApps = ({ datas }) => {
  return (
    <div className="px-15 grid  grid-cols-4 gap-5">
      {datas.map((data) => (
        <SingleApp key={data.id} data={data}></SingleApp>
      ))}
    </div>
  );
};

export default TrendingApps;
