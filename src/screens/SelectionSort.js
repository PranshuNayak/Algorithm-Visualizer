import React from "react";
import CustomNavigation from '../components/CustomNavigation'
import AlgorithmPage from '../components/AlgorithmPage'
import SelectionSortVisualizer from "../components/SelectionSortVisualizer";
import selectionsort from '../images/selectionsort.svg'
function SelectionSort() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <CustomNavigation name="selection sort" />
        </div>
        <div className="col-8">
        <AlgorithmPage
      overview="The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

      The subarray which is already sorted. 
      Remaining subarray which is unsorted.
  
  In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. "
      code={selectionsort}
      analysis="To find the minimum element from the array of elements, comparisons are required. After putting the minimum element in its proper position, the size of an unsorted array reduces to and then

      comparisons are required to find the minimum in the unsorted array.
      
      Therefore
      + + + = comparisons and swaps result in the overall complexity of . "
      >
        <SelectionSortVisualizer/>
      </AlgorithmPage>
        </div>
      </div>
    </div>
    
  );
}

export default SelectionSort;


      