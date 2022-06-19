import React from "react";
import book from "../images/bytesize_book.svg";
import Button from "./Button";
function Discover() {
  const style = {
    height:"400px",
    backgroundImage: `url(${book})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="col-12 d-flex flex-column flex-grow vh-100" id="discover">
      <div className="row justify-content-center">
        <div className="col-7 h3 text-dark text-center text-capitalize">
          Resources
        </div>
        <div className="col-7 text-dark lead text-center">
          As of now ALGOs only support visual learning of sorting algorithms
          only . We are working on including more sections in the future , till
          then use the below resources and keep learning. Click the topic and
          discover more!!
        </div>
        <div
          className="col-7 d-flex justify-content-center align-items-center"
          style={style}
        >
          <div className="row justify-content-center">
            <div className="col-6 text-center my-3">
              <Button text="Graph" />
            </div>
            <div className="col-6 text-center my-3">
              <Button text="Binary tree" />
            </div>
            <div className="col-6 text-center my-3">
              <Button text="Trie" />
            </div>
            <div className="col-6 text-center my-3">
              <Button text="Heaps" />
            </div>
            <div className="col-6 text-center my-3">
              <Button text="Stack" />
            </div>
            <div className="col-6 text-center my-3">
              <Button text="Tree" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Discover;
