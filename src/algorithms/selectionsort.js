const minimum = (array, start, end) => {
  let min = array[start];
  let index = start;
  for (let i = start; i < end; i++) {
    if (array[i] < min) {
      min = array[i];
      index = i;
    }
  }
  return index;
};

export const selectionSort = (array, size) => {
  let ans = []
  let temp, idx;
  
  for (let i = 0; i < size; i++) {
    idx = minimum(array, i, size);
    if (idx == i) continue;
    let arr = [];
    for (let j = 0; j < size; j++) arr.push(array[j]);
    ans.push({arr,swap:[i,idx]})
    
    temp = arr[idx];
    array[idx] = array[i];
    array[i] = temp;
  }
  let arr=[]
  for (let j = 0; j < size; j++) arr.push(array[j]);
  ans.push({arr,swap:[-1,-1]})
  console.log(ans)
  return ans;
};
