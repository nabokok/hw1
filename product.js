const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

// first method
productOfArray = resultsArray.flat(Infinity).reduce((acc, curr) => acc * curr);

console.log(productOfArray); // 24

// second method
productOfArray = 1;
for (let i = 0; i < resultsArray.flat(Infinity).length; i++){
    productOfArray *= resultsArray.flat(Infinity)[i];
}

console.log(productOfArray); // 24