"use strict"

function Animal (cat, dog, snake){
    this.cat = cat;
    this.dog = dog;
    this.snake = snake
}
const animals = new Animal ("cat, dog, snake");
console.log(animals);

Animal.prototype.interact = function(){
    console.log("dogs", "hate", "snakes.")
}
animals.interact();