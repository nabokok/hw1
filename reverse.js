const currentMaxValue = 4589;
let reverseMaxValue;

// first method
reverseMaxValue = +currentMaxValue.toString().split("").reverse().join("");

console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); 

// second method
const currentMaxValueString = currentMaxValue.toString();
reverseMaxValue = [];
for (let i = 0; i < currentMaxValueString.length; i++) {
    reverseMaxValue.unshift(currentMaxValueString[i]);
};
reverseMaxValue = Number(reverseMaxValue.join(""));

console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); 

// third method
reverseMaxValue = currentMaxValue.toString().split("");
let oldValue;

for (let i = 0; i < reverseMaxValue.length / 2; i++) {
    oldValue = reverseMaxValue[i]
    reverseMaxValue[i] = reverseMaxValue[reverseMaxValue.length - 1 -i];
    reverseMaxValue[reverseMaxValue.length - 1 -i] = oldValue;
};

reverseMaxValue = Number(reverseMaxValue.join(""));

console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); 


