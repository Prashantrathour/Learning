//Custom filterFunction
// Array.prototype.CustomFilter=function(cb){
//     result=[]
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)){
//             result.push(this[i])
//         }
//     }

//     return result
// }
// console.log([1,2,3,4,5].CustomFilter((i)=>i%2==0))

// //Custom MapFunction

// Array.prototype.cmap=function(cb){
//     let res=[]
//     for(let i=0;i<this.length;i++){
//         let r=cb(this[i],i,this)
//         res.push(r)
//     }
//     return res
// }
// console.log([1,2,3,4,5].cmap((i)=>{
//     if(i%2==0){
//         return i*2
//     }
//     return i

// }))

// Custom forEach
Array.prototype.for= function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

[1, 2, 3, 4, 4, 5].for((item)=>{
    console.log(item)
})
  Array.prototype.creduce=function(cb,initialValue){
    let acc=initialValue||undefined;
    for(let i=0;i<this.length;i++){
        if(acc!==undefined){
        acc=cb(acc,this[i],i,this);
      }else{
        acc=this[i]
      }
    }
    return acc
  }

  console.log([1,2,3].creduce((acc,curr)=>acc+curr),"cuu")


