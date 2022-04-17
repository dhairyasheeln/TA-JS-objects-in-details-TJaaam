/*
# Inheritance

Convert the below requirements into inheritance using:

- Pseudoclassical Pattern
- Class Pattern

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`


#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

*/

// function CreateAnimal(location,numberOfLegs){
//     this.location=location;
//     this.numberOfLegs=numberOfLegs;
// }

// CreateAnimal.prototype={
//     eat:function(){
//         console.log(`I live in ${this.location} and I can eat`);
//     },
//     changeLocation:function(newLocation){
//         this.location=newLocation;
//     },
//     summary:function(){
//         return `I live in ${this.location} and I have ${this.numberOfLegs} legss`;
//     }
// }

// function CreateDog(location,numberOfLegs,name,color){
//     CreateAnimal.apply(this,[location,numberOfLegs]);
//     this.name=name;
//     this.color=color;
// }



// CreateDog.prototype={
//     bark:function(){
//         alert(`I am ${this.name} and I can bark 🐶`);
//     },
//     changeName:function(newName){
//         this.name=newName;
//     },
//     changeColor:function(newColor){
//         this.color=newColor;
//     },
//     summary:function(){
//         return `I am ${this.name} and I am of ${this.color} color. I can also bark`
//     }
// }

// Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);

// let dogOne=new CreateDog('Pune',4,'Coco','brown');


// function CreateCat(location,numberOfLegs,name,colorOfEyes){
//     CreateAnimal.apply(this,[location,numberOfLegs]);
//     this.name=name;
//     this.colorOfEyes=colorOfEyes;

// }

// CreateCat.prototype={
//     meow:function(){
//         alert(`I am ${this.name} and I can do mewo meow 😹`);
//     },
//     changeName:function(newName){
//         this.name=newName;
//     },
//     changeColorOfEyes:function(newColor){
//         this.colorOfEyes=newColor;
//     },
//     summary:function(){
//         return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
//     }

// }

// Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype);

// let catOne=new CreateCat('Mumbai',4,'Sippy','blue');



class AnimalClass{
    constructor(location,numberOfLegs){
        this.location=location;
        this.numberOfLegs=numberOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation){
        this.location=newLocation;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legss`;
    }
}

class DogClass extends AnimalClass{
    constructor(location,numberOfLegs,name,color){
        super(location,numberOfLegs);
        this.name=name;
        this.color=color;
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`);
    }
    changeName(newName){
        this.name=newName;
    }
    changeColor(newColor){
        this.color=newColor;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}


let dogg=new DogClass('JM Road',4,'Popo','off white');




