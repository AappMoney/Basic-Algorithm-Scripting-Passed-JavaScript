
// const CONVERTER = function (num) {
//     const romanToNum = {
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XL: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1
//     }
//     let roman = "";

//     for(let key in romanToNum) {
//         while(num >= romanToNum[key]){
//             roman += key;
//             num -= romanToNum[key];
//         }
//     }
//     return roman;


// }

// console.log(CONVERTER(11));




// function facktorilaze(num) {
//   let arr = [];
//   if(num > 0 ){
//     for(let i = 1; i <= num; i++){
//      arr.push(i);
//     }
//   }else{
//     return ++num;
//   }


//   return arr.reduce((a,b) => a * b);

// }

// console.log(facktorilaze(0));

/*
function findLongestWordLength(str) {
  let strArr = str.trim().split(" ");
  let result = 0;

  for(let key of strArr) {
    if(key.length > result){
      result = key.length;
    }
  }

  return result;
}

console.log(findLongestWordLength("May the force be with you"));
*/



/*
function largestOfFour(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    let joj = Math.max.apply(0, arr[i]);
    result.push(joj);
  }

  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
*/

/*
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("He has to give me a new sasame", "same"));
*/


/*
function confirmEnding(str, target) {
  let re = new RegExp(target + "$", 'i');

  return re.test(str);
}

console.log(confirmEnding("He has to give me a new sasame", "same"));  //true
*/


/*
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

console.log(repeatStringNumTimes("abc", 3));
*/

/*
function truncateString(str, num) {
  return str.length > num ? str.slice(0,num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
*/


/*
function findElement(arr, func) {
  let num = 0;
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])){
      num = arr[i];
      break;
    }
    num = undefined;
  }
  return num;
}

console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

*/


/*
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

console.log(titleCase("i'm a little tea pot"));
*/


/*
function titleCase(str) {
let arr = str.toLowerCase().split(" ");

for(let i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}

return arr.join(" ")

}
console.log(titleCase("i'm a little tea pot"));
*/


/*
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n,0,...arr1);

  return localArr;
}

console.log(frankenSplice([1, 2], ["a", "b"], 1));
*/


/*
function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([1, null, NaN, 2, undefined]));
*/


/*
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

console.log(getIndexToIns([40, 60], 50));
*/



/*
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for(let i = 0; i < test.length; i++) {
    if(target.indexOf(test[i]) > 0) return false;
  }
  return true;
}

console.log(mutation("hello", "Hello"));
*/


/*
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
*/
// [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8 ] ]












