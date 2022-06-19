export const insertionSort = (array, size) => {
  let ans = [];
  let temp, idx;
  
  for (let i = 0; i < size; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let arr = [];
        for (let k = 0; k < size; k++) arr.push(array[k]);
        ans.push({arr,swap:[j,j-1]});
        temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;

        
      } else break;
    }
  }
  let arr=[]
  for (let j = 0; j < size; j++) arr.push(array[j]);
  ans.push({arr,swap:[-1,-1]})
  console.log(ans);
  return ans;
};
