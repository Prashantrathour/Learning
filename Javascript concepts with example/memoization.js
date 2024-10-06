function memo(){
    const cach={}
    return (n)=>{
        if(cach[n]){
            console.log("from cashing")
            return cach[n]
        }else{
            let res=0
            for(let i=0;i<n;i++){
                res+=i
            }
            cach[n] = res
            console.log("from calculation")
           
            return res
    
        }

    }
}
let cal=memo()



