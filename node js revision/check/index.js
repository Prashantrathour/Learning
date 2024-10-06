// // function maxSubarraySum(arr) {
// //     let maxSum = 0;
// //     let currentSum = 0;
  
// //     for (let i = 0; i < arr.length; i++) {
// //       currentSum += arr[i];
// //       if (currentSum > maxSum) {
// //         maxSum = currentSum;
// //       } else if (currentSum < 0) {
// //         currentSum = 0;
// //       }
// //     }
  
// //     return maxSum;
// //   }
  
// //   console.log(maxSubarraySum([-1,-1,0,1])); 




//   function MaxContiguousSubsequence(arr) {
//     const numSet = new Set(arr);
//     let maxSeq = 0;

//     for (let num of numSet) {
//         if (!numSet.has(num - 1)) {
//             let currentNum = num;
//             let currentSeq = 1;

//             while (numSet.has(currentNum + 1)) {
//                 currentNum++;
//                 currentSeq++;
//             }

//             maxSeq = Math.max(maxSeq, currentSeq);
//         }
//     }

//     return maxSeq;
// }

// // Test cases
// const arr1 = [1, 9, 3, 10, 4, 20, 2];
// const arr2 = [0, 4, 3, 2, 1];
// console.log(MaxContiguousSubsequence(arr1)); // Output: 3
// console.log(MaxContiguousSubsequence(arr2)); // Output: 5
// function divisorGame(N) {
//     let count = 0;
//     let valid = true;
//     while (valid) {
//         valid = false;
//         for (let x = 1; x < N; x++) {
//             if (N % x === 0) {
//                 N = N - x;
//                 count++;
//                 valid = true;
//                 break;
//             }
//         }
//     }
//     return count % 2 === 1;
// }

// // Example usage
// console.log(divisorGame(3)); // Output: true
// console.log(divisorGame(2)); // Output: false
// // const readline = require('readline');

// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // let n, c, r;
// // let a = [];

// // rl.question('Enter n, c, r: ', (input) => {
// //   const inputArr = input.split(' ');
// //   n = parseInt(inputArr[0]);
// //   c = parseInt(inputArr[1]);
// //   r = parseInt(inputArr[2]);

// //   rl.question('Enter array elements: ', (input) => {
// //     a = input.split(' ').map(Number);
// //     const dp = new Array(r + 1).fill(false);
// //     dp[0] = true;
// //     let newdp = new Array(r + 1).fill(false);
// //     for (let i = 0; i < n; i++) {
// //       for (let j = 0; j + a[i] < r + 1; j++) {
// //         newdp[j + a[i]] = newdp[j + a[i]] || dp[j];
// //       }
// //       dp.splice(0, dp.length, ...newdp);
// //       newdp = new Array(r + 1).fill(false);
// //     }
// //     if (dp[r]) {
// //       console.log('Party');
// //     } else {
// //       console.log('No Party');
// //     }
// //     rl.close();
// //   });
// // });


// function checkParty(n, r, a) {
//     let dp = new Array(r + 1).fill(false);
//     dp[0] = true;
//     let newdp = new Array(r + 1).fill(false);
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j + a[i] < r + 1; j++) {
//             newdp[j + a[i]] = newdp[j + a[i]] || dp[j];
//         }
//         dp.splice(0, dp.length, ...newdp);
//         newdp = new Array(r + 1).fill(false);
//     }
//     if (dp[r]) {
//         return "Party";
//     } else {
//         return "No Party";
//     }
// }

// // Example usage
// const n = 6;

// s="3 34 4 12 5 2"
// const r = 9;
// const a = [3,34,4,12,5,2];
// console.log(checkParty(n, r, a)); 








class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function teamQueueOperations(queries) {
    let Q1 = new Queue();
    let Q2 = new Queue();
    let Q3 = new Queue();
    let Q4 = new Queue();

    let T = 0;
    let F = -1;

    while (queries.length > 0) {
        let currentQuery = queries.shift();
        let queryType = currentQuery[0];

        if (queryType === "E") {
            let a = parseInt(currentQuery[1]);
            let b = parseInt(currentQuery[2]);
            T = T + 1;

            if (a === 1) Q1.enqueue({ rollNumber: b, time: T });
            else if (a === 2) Q2.enqueue({ rollNumber: b, time: T });
            else if (a === 3) Q3.enqueue({ rollNumber: b, time: T });
            else Q4.enqueue({ rollNumber: b, time: T });

            if (F === -1) F = a;
        } else {
            if (F === 1) {
                const frontStudent = Q1.front();
                console.log("Team 1", frontStudent.rollNumber);
                Q1.dequeue();

                if (Q1.isEmpty()) {
                    if (!Q2.isEmpty()) F = 2;
                    else if (!Q3.isEmpty()) F = 3;
                    else if (!Q4.isEmpty()) F = 4;
                    else F = -1;
                }
            } else if (F === 2) {
                const frontStudent = Q2.front();
                console.log("Team 2", frontStudent.rollNumber);
                Q2.dequeue();

                if (Q2.isEmpty()) {
                    if (!Q1.isEmpty()) F = 1;
                    else if (!Q3.isEmpty()) F = 3;
                    else if (!Q4.isEmpty()) F = 4;
                    else F = -1;
                }
            } else if (F === 3) {
                const frontStudent = Q3.front();
                console.log("Team 3", frontStudent.rollNumber);
                Q3.dequeue();

                if (Q3.isEmpty()) {
                    if (!Q1.isEmpty()) F = 1;
                    else if (!Q2.isEmpty()) F = 2;
                    else if (!Q4.isEmpty()) F = 4;
                    else F = -1;
                }
            } else if (F === 4) {
                const frontStudent = Q4.front();
                console.log("Team 4", frontStudent.rollNumber);
                Q4.dequeue();

                if (Q4.isEmpty()) {
                    if (!Q1.isEmpty()) F = 1;
                    else if (!Q2.isEmpty()) F = 2;
                    else if (!Q3.isEmpty()) F = 3;
                    else F = -1;
                }
            }
        }
    }
}

// Example usage
const queries = [
    ["E", 1, 1],
    ["E", 2, 1],
    ["E", 1, 2],
    ["D"],
   
    ["D"]
];

teamQueueOperations(queries);


