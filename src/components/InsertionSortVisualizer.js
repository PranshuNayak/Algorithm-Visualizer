import React from 'react'
import {insertionSort} from '../algorithms/insertionsort'
import { SortingVisualizer } from '../context/Visualizer'
function InsertionSortVisualizer() {
  return (
   <SortingVisualizer name='bubblesort' algorithm={insertionSort} />
  )
}

export default InsertionSortVisualizer