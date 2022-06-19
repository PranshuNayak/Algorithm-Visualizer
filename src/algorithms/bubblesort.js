export const bubbleSort = (array, size) => {
  let ans = [];
  let temp;
  
  for (let i = 0; i < size; i++) {
    let flag = false;
    for (let j = 0; j < size - 1; j++) {
      if (array[j] > array[j + 1]) {
        let arr = [];
        for (let k = 0; k < size; k++) arr.push(array[k]);
        ans.push({arr,swap:[j,j+1]});
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        flag = true;

      
      }
    }
    if (!flag) break;
  }
  let arr=[]
  for (let j = 0; j < size; j++) arr.push(array[j]);
  ans.push({arr,swap:[-1,-1]})
  console.log(ans);
  return ans;
};
