import React from "react";
import mergesort from "../images/icon-park-solid_relational-graph.svg";
import quicksort from "../images/icon-park-twotone_chart-graph-1.svg";
import bubblesort from "../images/ic_twotone-bubble-chart.svg";
import insertionsort from "../images/icon-park-twotone_chart-graph-1.svg";
import selectionsort from "../images/foundation_graph-pie.svg";
import AlgoCard from "../components/AlgoCard";

function Algorithms() {
  const firstRow = [
    { name: "merge sort", icon: `${mergesort}`, url: "/merge-sort" },
    { name: "quick sort", icon: `${quicksort}` },
    { name: "bubble sort", icon: `${bubblesort}`, url: "/bubble-sort" },
  ];

  const secondRow = [
    {
      name: "insertion sort",
      icon: `${insertionsort}`,
      url: "/insertion-sort",
    },
    {
      name: "selection sort",
      icon: `${selectionsort}`,
      url: "/selection-sort",
    },
  ];
  return (
    <div className="col-12 d-flex flex-column flex-grow vh-100" id="algorithms">
      <div className="row flex-grow-1 justify-content-center align-items center mb-3">
        <div className="col-12 h2 text-capitalize text-dark text-center">
          let's start learning
        </div>
       
        <div className="col-12">
          <div className="row justify-content-between align-items-center">

          {firstRow.map((algorithm) => (
            <AlgoCard
              title={algorithm.name}
              logo={algorithm.icon}
              key={algorithm.name}
              url={algorithm.url}
            />
          ))}
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-around align-items-center">
          {secondRow.map((algorithm) => (
            <AlgoCard
              title={algorithm.name}
              logo={algorithm.icon}
              key={algorithm.name}
              url={algorithm.url}
            />
          ))}
          </div>
        </div>
      
      </div>
      
    </div>
  );
}

export default Algorithms;
