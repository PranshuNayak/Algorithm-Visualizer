import React from "react";
import CustomNavigation from '../components/CustomNavigation'
import AlgorithmPage from '../components/AlgorithmPage'
import BubbleSortVisualizer from "../components/BubbleSortVisualizer";
import bubblesort from '../images/bubblesort.svg'
function BubbleSort() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <CustomNavigation name="bubble sort" />
        </div>
        <div className="col-8">
        <AlgorithmPage
      overview="Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order. Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort."
      code={bubblesort}
    analysis="The complexity of bubble sort is O(n^2) in both worst and average cases, because the entire array needs to be iterated for every element."
      >
      <BubbleSortVisualizer/>
      </AlgorithmPage>
        </div>
      </div>
    </div>
  );
}



export default BubbleSort;
