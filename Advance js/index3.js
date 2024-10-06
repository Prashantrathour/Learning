function transformString(input) {
    if (typeof input !== 'string' || input.length === 0) {
      
      return "Invalid input";
    }
  
    let result = '';
    let shouldDouble = false;
  
    for (let i = 0; i < input.length; i++) {
      const currentChar = input[i];
  
      if (shouldDouble) {
        if (currentChar !== ' ') {
          result += currentChar + currentChar;
        }
        shouldDouble = false;
      } else if (currentChar === '#') {
        if (i < input.length - 1) {
          result += input[i + 1].toUpperCase();
          i++; 
        }
      } else if (currentChar === '$') {
        if (i < input.length - 1) {
          result += input[i + 1].toLowerCase();
          i++; 
        }
      } else if (currentChar === '%') {
        shouldDouble = true;
      } else if (currentChar !== '@' && currentChar !== ' ') {
        result += currentChar;
      }
    }
  
    return result;
  }
  
  const inputString = "@Hel#2l@0! Remove spaces";
  const transformedString = transformString(inputString);
  console.log(transformedString);
  