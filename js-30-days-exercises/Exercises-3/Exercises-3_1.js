/*
Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo
*/
// 1-
let dog={}
// 2-
console.log(typeof dog, dog)
// 3-
dog.name='Bob';
dog.legs=4;
dog.color='brown';
dog.age=7;
dog.bark = function(){
    return 'woof woof'
};
//4 
console.log(typeof dog, dog)
console.log(dog.bark())
console.log(Object.values(dog))
//5
dog.breed=function(){
    return 'I can breed'
}
dog.getDogInfo=function(){
    return `
        ${this.name},
        ${this.legs},
        ${this.color},
        ${this.age},
    `
}

console.log(dog.getDogInfo)