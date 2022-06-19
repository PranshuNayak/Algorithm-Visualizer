let ans = new Array(20);
let partition = new Array(20);

const copyPartitionArray = (arr,left,right,idx)=>{
    let ans = [];
    for(let i=left;i<=right;i++){
        ans.push(arr[i]);
    }
    partition[idx] = ans;
}

const merge = (arr,left,mid,right,parent)=>{
    let p = left , q= mid+1,count=0;
    let sorted = new Array(right-left+1)

    while(p<=mid && q<=right){
        if(arr[p]<=arr[q]){
            sorted[count]=arr[p];
            p++;
        }
        else{
            sorted[count]=arr[q];
            q++;
        }
        count++;
    }

    while(p<=mid){
        sorted[count]=arr[p];
        p++;
        count++;
       
    }
    while(q<=right){
        sorted[count]=arr[q];
        q++;
        count++;
    }
    
    p=left;
    for(let i=0;i<sorted.length;i++){
        arr[p++] = sorted[i];
    }
    console.log(sorted)
    ans[parent] = sorted;
}

const mergesort = (arr,left,right,parent)=>{
    if(left<right){
        copyPartitionArray(arr,left,right,parent);
        let mid = Math.floor((left+right)/2);
        mergesort(arr,left,mid,2*parent+1);
        mergesort(arr,mid+1,right,2*parent+2);
        merge(arr,left,mid,right,parent);
        return;
    }
    if(left==right){
        copyPartitionArray(arr,left,right,parent);
        return;
    }
    return;

}

const levelOrder = (array)=>{
    // console.log(array)
    let ans = [];
    let idx = 0;
    for(let level=0;level<=4;level++){
        if(typeof(array[idx])==="undefined")
        break;
        let tempArray = [];
        for(let i=0;i<Math.pow(2,level);i++){
            if(typeof(array[idx])==="undefined")
            break;
            tempArray.push(array[idx]);
            idx++;
        }
        // console.log(tempArray)
        ans.push(tempArray);
    }
    return ans;
}

export const main = (arr,size)=>{
    mergesort(arr,0,size-1,0);
    let arr_1 = levelOrder(partition);
    let arr_2 = levelOrder(ans);
    console.log(ans)
    return({
        arr_1,
        arr_2
    })
}

