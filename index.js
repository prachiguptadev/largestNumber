function findLargestNum(numbers){
  
    let largestNum = numbers[0]
     for(i = 1; i < numbers.length; i++ ){
       if(numbers[i] > largestNum){
         largestNum = numbers[i]
       }
     }
    return largestNum;
    
  }
  const numbers = [20, 41, 78, 30, 52, 40]
  const largestNum = findLargestNum(numbers)
  console.log(largestNum)  