let nums = [3, 1, 9, 7, 5];

function miniMaxSum(arr) {
  let sorted = arr.sort();
  let miniArr = sorted.slice(0, -1);
  let maxArr = sorted.slice(1, 5);
  let miniSum = miniArr.reduce((acc, val) => acc + val, 0);
  let maxSum = maxArr.reduce((acc, val) => acc + val, 0);
  console.log(miniSum, maxSum);
}

console.log(miniMaxSum(nums));

//https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
