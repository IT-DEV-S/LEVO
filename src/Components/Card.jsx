import { useState, useEffect } from "react";
import MoreInfo from "./MoreInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import info from "../Data/data.json";

const Card = () => {
  const [btnTxt, setBtnTxt] = useState("READ MORE");
  const [display, setDisplay] = useState("none");
  const [pressKey, setPressKey] = useState(false);

  useEffect(() => {
    return () => {
      setPressKey(false);
    };
  });

  const showHide = () => {
    setPressKey(true);
    if (btnTxt === "LESS") {
      setDisplay("none");
      setBtnTxt("READ MORE");
    } else {
      setDisplay("grid");
      setBtnTxt("LESS");
    }
  };

  return (
    <div className="container head">
      <div className="row">
        <h2 className="padding20">Related article</h2>
      </div>

      <div className="row ">
        <div className=".col-xs-6 .col-sm-4 padding20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
          adipisci? Nihil explicabo nam tempora aut magnam alias rem pariatur
          vel, ipsa veritatis. Voluptas repudiandae alias autem, officiis
          consequuntur corporis, fugit cumque cum aut iure animi non ullam
          possimus vel temporibus, inventore amet libero! Error, deserunt
          ducimus a tempora.
        </div>
      </div>

      <div className="row center">
        {info.map((info, index) => {
          if (index < 3) {
            return (
              <div
                key={index.toString()}
                className=".col-xs-6 .col-sm-4 padding20"
              >
                <MoreInfo
                  info={info}
                  pressKey={pressKey}
                  key={index.toString()}
                  className="apearance"
                />
              </div>
            );
          } else {
            return (
              <div key={index.toString()} style={{ display: display }}>
                <div
                  key={index.toString()}
                  className=".col-xs-6 .col-sm-4 padding20"
                >
                  <MoreInfo
                    info={info}
                    pressKey={pressKey}
                    key={index.toString()}
                    className="apearance"
                  />
                </div>
              </div>
            );
          }
        })}
      </div>

      <button className="btn btn-outline-danger redButton" onClick={showHide}>
        {btnTxt}
      </button>
    </div>
  );
};

export default Card;
