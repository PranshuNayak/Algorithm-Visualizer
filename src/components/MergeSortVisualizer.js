import React from 'react'
import {main} from '../algorithms/mergesort'
import { SortingVisualizer } from '../context/Visualizer'
function MergeSortVisualizer() {
  return (
   <SortingVisualizer name='mergesort' algorithm={main} />
  )
}

export default MergeSortVisualizer