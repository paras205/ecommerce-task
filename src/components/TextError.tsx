import React, { FC } from "react";

const TextError: FC<{}> = (props: any) => {
  return (
    <div className="error" style={{ fontSize: "14px", color: "red" }}>
      {JSON.stringify(props.children)}
    </div>
  );
};

export default TextError;
