function api(n){
    return new Promise((resolve,rejected)=>{
        if(n%2==0){
            resolve("yes number even")
        }else{
            rejected("error")
        }
    })
}
api(4).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})