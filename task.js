// Задание 1

function getArrayParams(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i] >= max && arr[i] !== min ){
         max = arr[i];
        }
         if (arr[i] <= min && arr[i] !== max){
            min = arr[i];
        }
        
        sum += arr[i]; 
    }
    avgFull = sum / arr.length;
     let avg = avgFull.toFixed(2) * 1;
  return { min: min, max: max, avg: avg};
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++ ){
    sum += arr[i];
  }
  return sum;
}
function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++){
    let sum = func(arrOfArr[i])
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  let difference = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
    if (arr[i] < max) {
      min = arr[i];
    }

  }
  difference = max - min;
  return Math.abs(difference);
}
