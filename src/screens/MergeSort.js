import React from "react";
import CustomNavigation from "../components/CustomNavigation";
import AlgorithmPage from "../components/AlgorithmPage";
import MergeSortVisualizer from "../components/MergeSortVisualizer";
import mergesort from '../images/mergesort.svg'
function MergeSort() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <CustomNavigation name="merge sort" />
        </div>
        <div className="col-8">
          <AlgorithmPage
            overview="Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list. Idea: Divide the unsorted list into sublists, each containing element. Take adjacent pairs of two singleton lists and merge them to form a list of 2 elements. will now convert into lists of size 2. Repeat the process till a single sorted list of obtained. While comparing two sublists for merging, the first element of both lists is taken into consideration. While sorting in ascending order, the element that is of a lesser value becomes a new element of the sorted list. This procedure is repeated until both the smaller sublists are empty and the new combined sublist comprises all the elements of both the sublists."
            code={mergesort}
            analysis="Time Complexity: The list of size is divided into a max of parts, and the merging of all sublists into a single list takes time, the worst case run time of this algorithm is"
          >
            <MergeSortVisualizer />
          </AlgorithmPage>
        </div>
      </div>
    </div>
  );
}

export default MergeSort;
