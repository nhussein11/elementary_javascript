// Declare an empty array
const myArray=[]
// Declare an array with more than 5 number of elements
const myArray1=[0, 3.14, 9.81, 37, 98.6, 100] 
// Find the length of your array
console.log(myArray1.length)
// Get the first item, the middle item and the last item of the array
console.log(myArray1[0])
console.log(myArray1[myArray1.length/2])
console.log(myArray1[myArray1.length-1])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const myArray2=[0, 3.14, 'hi', [37, 98.6], {'word':'wordValue'}] 
console.log(myArray2.length)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies=['Facebook','Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length/2 | 0])
console.log(itCompanies[itCompanies.length-1])
// Print out each company
console.log(itCompanies.toString())
// Change each company name to uppercase one by one and print them out
console.log(itCompanies.toString().toUpperCase())
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies .join(', ').replace(', Amazon',' and Amazon')+' are big IT companies')
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const checkFacebook = itCompanies.includes('Facebook') ? 'Facebook' : 'company not found' 
console.log(checkFacebook)
// Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach(item=>{item.includes('o') ? console.log(item) : null })
// Sort the array using sort() method
console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
const lenghtItCompanies = itCompanies.length 
console.log(itCompanies.slice(0,3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(lenghtItCompanies-3,lenghtItCompanies))
// Slice out the middle IT company or companies from the array
const middleItCompanies = itCompanies.length /2 | 0 
console.log(itCompanies.slice(middleItCompanies-1,middleItCompanies+2))
// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)
// Remove the middle IT company or companies from the array
itCompanies.splice(middleItCompanies,1)
console.log(itCompanies)
// Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)
// Remove all IT companies
itCompanies.splice()
console.log(itCompanies)