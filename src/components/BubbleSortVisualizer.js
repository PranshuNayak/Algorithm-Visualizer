import React from 'react'
import {bubbleSort} from '../algorithms/bubblesort'
import { SortingVisualizer } from '../context/Visualizer'
function BubbleSortVisualizer() {
  return (
   <SortingVisualizer name='bubblesort' algorithm={bubbleSort} />
  )
}

export default BubbleSortVisualizer