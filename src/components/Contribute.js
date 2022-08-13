import React from "react";
import github from "../images/Vector.svg";
import management from "../images/simple-icons_googletagmanager.svg";
import heart from "../images/ant-design_heart-filled.svg";
import IconWithSubtitle from "../components/IconWithSubtitle";

function Contribute() {
  const items = [
    { text: "developer", icon: `${github}`,href:"https://github.com/PranshuNayak/Algorithm-Visualizer/tree/master" },
    { text: "donate", icon: `${heart}` },
    { text: "management", icon: `${management}` },
  ];
  const style = {
    backgroundColor: "#DDA7A7",
    borderRadius: "20px",
    padding: "10px",
  };
  return (
    <div className="col-12 vh-50 my-5 " id="contribute">
      <div className="row justify-content-center align-items-center">
        <div className="col-7 text-center h3">
            Contribute
        </div>
        <p className="col-7 text-center">
            ALGOs is in it's initial stage of development , we rely on community efforts to
            drive our projects . There are various ways you may contribute. Every contribution
            is valuable for our project. We accept contribution in these ways.
        </p>
        <div className="col-7">
          <div className="row justify-content-center align-items-center">
            {
              items.map((item)=>(
                <div className="col-4">
                  <IconWithSubtitle item={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contribute;
