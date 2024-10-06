// const obj= [

//     {id:1,name:"Ram"},
//     {id:2,name:"Shyam"},
//     {id:3,name:"jamm"},
// ]
// console.log(obj.reduce((acc,curr)=>{
//      acc[curr.name]=curr.id
//      return acc
// },{}))
// // { Ram: 1, Shyam: 2, jamm: 3 }

// function chips() {
//     console.log('sync: chips');
//   }
  
//   function pizza() {
//     setTimeout(()=>{
//       console.log('async: pizza');
//     },0);
//   }
  
//   function main() {
//     chips();
//     pizza();
//     chips();
//     chips();
//     chips();
//   }
  
//   main();




// function create(a,b,c,d){
//     let acc={
//         x:a,
//         y:b,
//         print:function(){
//             console.log(this.x)
//         }
//     }
   

// return acc



// } 
// let op=create(1,2,3,4)
// op.print()

// console.log("a".charCodeAt(0))
// console.log("A".charCodeAt(0))
// let input="c"
// let output=""
// for(let charcode="a".charCodeAt(0);charcode<"z".charCodeAt(0);charcode++){
//         let alpha=String.fromCharCode(charcode)
//         if(input.indexOf(alpha)===-1){
//             output+=alpha
//         }



// }

// console.log(output)
// function findMissingAlphabets(input) {
//     // Convert the input string to lowercase for case-insensitive comparison
//     input = input.toLowerCase();

//     // Initialize a string containing all alphabets from 'a' to 'z'
//     const allAlphabets = 'abcdefghijklmnopqrstuvwxyz';

//     // Use the filter method to find missing alphabets
//     const missingAlphabets = allAlphabets.split('').filter(alphabet => !input.includes(alphabet)).join('');

//     return missingAlphabets;
// }

// const input = "ac";
// const missingAlphabets = findMissingAlphabets(input);
// console.log(missingAlphabets);
// const time=(n)=>{
//     let i=1
//     let inter=setInterval(() => {
//         console.log(i)
//         i++
//         if(i==n+1){
//             clearInterval(inter)
//         }
        
//     }, 1000);

// }
// time(6)


// function outrt(){
//     let x="hello"
//     return function (){
//         console.log("print")
//     }

// }
// function sayGoodbye() {
//     console.log("Good bye! ", this);
//   }
  
//   function sayHello() {
//     console.log("Helloo! ", this);
//     sayGoodbye();
//   }
  
//   sayHello();
var sayArrowHello = () => {
    console.log("Arrow Hello ", this);
  };
  
  sayArrowHello();
  
  function sayRegularHello() {
    console.log("Regular Hello ", this);
  }
  
  sayRegularHello();
  