/**
 * @desc composes an array of functions into a function that passes
 *       a value through a pipeline of functions
 * @param {Array<Function>|Function} funcs
 * @return {Function}
 */
function compose(funcs) {
    return (n)=>{
        let out=n
             for( let i=0;i<funcs.length;i++){
               out= funcs[i](out)
        }
        return out  
    }

}
const pipeline = [
    (str) => str.length,
    (length) => length * 100,
    (num) => num + 5
  ];

  const composed = compose(pipeline);

  console.log(composed('cat'));
module.exports = compose;

