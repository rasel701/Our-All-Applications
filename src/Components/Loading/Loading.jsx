import React from "react";

import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="mx-auto text-center my-10 w-[300px]">
      <RingLoader color="#2ec020" size={200} />
    </div>
  );
};

export default Loading;
