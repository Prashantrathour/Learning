function rotate(arr,n){
    let left=[]
    let right=[]
    for(let i=0;i<n;i++){
        left.unshift(arr[arr.length-i-1])
        
    }
    for(let i=0;i<arr.length-n;i++){
             right.push(arr[i])
    }
    
    
  return [...left,...right]
}


let arr=[1,2,3,4,5]
let n=3
console.log(rotate(arr,n))
// 5,1,2,3,4
