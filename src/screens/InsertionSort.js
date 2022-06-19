import React from "react";
import CustomNavigation from '../components/CustomNavigation'
import AlgorithmPage from '../components/AlgorithmPage'
import InsertionSortVisualizer from "../components/InsertionSortVisualizer";
import insertionsort from '../images/insertionsort.svg'
function InsertionSort() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <CustomNavigation name="insertion sort" />
        </div>
        <div className="col-8">
        <AlgorithmPage
      overview="Insertion sort is based on the idea that one element from the input elements is consumed in each iteration to find its correct position i.e, the position to which it belongs in a sorted array.

      It iterates the input elements by growing the sorted array at each iteration. It compares the current element with the largest value in the sorted array. If the current element is greater, then it leaves the element in its place and moves on to the next element else it finds its correct position in the sorted array and moves it to that position. This is done by shifting all the elements, which are larger than the current element, in the sorted array to one position ahead"
      code={insertionsort}
      analysis="In worst case,each element is compared with all the other elements in the sorted array. For N elements, there will N^2 be comparisons. Therefore, the time complexity is O(N^2)"
      >
        <InsertionSortVisualizer/>
      </AlgorithmPage>
        </div>
      </div>
    </div>
  );
}

export default InsertionSort;
