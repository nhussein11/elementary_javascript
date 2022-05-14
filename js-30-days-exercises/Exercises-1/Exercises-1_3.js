/*
Exercise: Level 3
The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

1.Slice the first ten countries from the countries array

Find the middle country(ies) in the countries array

Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const agesSorted = ages.sort((a,b)=>a-b)
console.log(agesSorted);

console.log("Min age: "+agesSorted[0]);
console.log("Max age: "+agesSorted[agesSorted.length-1]);
console.log("Middle age: "+ agesSorted[agesSorted.length/2 | 0]);

const avgAge =agesSorted.reduce((a,b)=>a+b/agesSorted.length)
console.log("Avg age: "+ avgAge);

const rangeAges = agesSorted[agesSorted.length-1] - agesSorted[0];
console.log("Range: "+rangeAges );

const minComparation = Math.abs(agesSorted[0] - avgAge);
const maxComparation = Math.abs(agesSorted[agesSorted.length-1] - avgAge);  
console.log ("minComparation "+ minComparation);
console.log ("maxComparation "+ maxComparation);

const countriesJs = require('./countries');
const countries=countriesJs.allCountries;

console.log(countries.slice(1,10));
console.log(countries[countries.length/2|0]);

