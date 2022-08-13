import React from "react";
import book from "../images/bytesize_book.svg";
import Navigator from "./Navigator";
function Discover() {
  const style = {
    height:"400px",
    backgroundImage: `url(${book})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="col-12 d-flex flex-column flex-grow vh-50" id="discover">
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
              <Navigator text="Graph" href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"/>
            </div>
            <div className="col-6 text-center my-3">
              <Navigator text="Binary tree" href="https://www.geeksforgeeks.org/binary-tree-data-structure/"/>
            </div>
            <div className="col-6 text-center my-3">
              <Navigator text="Trie" href="https://www.geeksforgeeks.org/tag/trie/" />
            </div>
            <div className="col-6 text-center my-3">
              <Navigator text="Heaps" href="https://www.geeksforgeeks.org/heap-data-structure/" />
            </div>
            <div className="col-6 text-center my-3">
              <Navigator text="Stack" href="https://www.geeksforgeeks.org/stack-data-structure/" />
            </div>
            <div className="col-6 text-center my-3">
              <Navigator text="Queue" href="https://www.geeksforgeeks.org/queue-data-structure/" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Discover;
