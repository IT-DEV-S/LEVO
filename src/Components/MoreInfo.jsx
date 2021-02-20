import React, { useState, useEffect } from "react";

const MoreInfo = ({ info, pressKey }) => {
  const [crdTxt, setCrdTxt] = useState("READ MORE");
  useEffect(() => {
    return () => {
      if (pressKey) {
        setCrdTxt("READ MORE");
      }
    };
  });

  const fmore = () => {
    if (crdTxt === "READ MORE") setCrdTxt("CLOSE");
    else setCrdTxt("READ MORE");
  };

  return (
    <div className="color" style={{ background: info.rgb }}>
      <div className="containor">
        <p>{info.date}</p>
        <h4>{info.header}</h4>
        <p>{info.txt}</p>
        <span className="showHide">{crdTxt === "CLOSE" ? info.more : ""}</span>
        <br />
        <br />
        <button onClick={fmore} style={{ background: info.rgb }}>
          {crdTxt}
        </button>
      </div>
    </div>
  );
};
export default MoreInfo;
