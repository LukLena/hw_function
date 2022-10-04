// Задание 1

function getArrayParams(...arr) {
    let max = 100;
    let min = -100;
    let sum = 0;
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i] >= max ){
         max = arr[i];
        }
        else if (arr[i] <= min){
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
    let sum = worker(arrOfArr[i])
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
 console.log(worker([1, 2, 3])); // 6
console.log(worker([4, 5, 6])); // 15
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
makeWork(arrOfArr, worker); // 15

// Задание 3
function worker2(arr) {
  let max = 0; 
  let min = 0;
  for (let j = 0; j < arr.length; j++){
      if (j <= arr[j]){
          min += arr[j];
        }
      else if (j >= arr[j]){
        max += arr[j]
      }
    return Math.abc(max - min);
}
function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++){
    let sum = worker2(arrOfArr[i])
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
console.log(worker2([0, 0, 0])); // 0 - 0 = 0
console.log(worker2([-1, -99])); // -99 - (-1) = -98 => 98
arrOfArr = [[0, 0, 0], [-1, -99]];
makeWork(arrOfArr, worker2);