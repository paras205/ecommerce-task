import React from "react";
import RiseLoader from "react-spinners/RiseLoader";

const Loader = () => {
  return (
    <div className="loader">
      <RiseLoader color={"#f2c94c"} loading={true} size={20} margin={3} />
    </div>
  );
};

export default Loader;
