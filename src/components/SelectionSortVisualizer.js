import React from 'react'
import {selectionSort} from '../algorithms/selectionsort'
import { SortingVisualizer } from '../context/Visualizer'
function SelectionsortVisualizer() {
  return (
   <SortingVisualizer name='bubblesort' algorithm={selectionSort} />
  )
}

export default SelectionsortVisualizer