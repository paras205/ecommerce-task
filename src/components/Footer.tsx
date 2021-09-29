import React, { FC } from "react";
import moment from "moment";

const Footer: FC<{}> = () => {
  return (
    <footer className="footer">
      <div className="container">
        @ {moment().format("YYYY")} ALl Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
