/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let posArray = [];
  let negArray = [];
  let zeroArray = [];
  arr.forEach((num) => {
    if (num > 0) {
      posArray.push(num);
    } else if (num < 0) {
      negArray.push(num);
    } else {
      zeroArray.push(num);
    }
  });
  console.log((posArray.length / arr.length).toFixed(6));
  console.log((negArray.length / arr.length).toFixed(6));
  console.log((zeroArray.length / arr.length).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);

//https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
