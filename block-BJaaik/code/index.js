class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    eat(){
        console.log(`Hi my name is ${this.name} and I can eat`);
    }
    sleep(){
        console.log(`Hi my name is ${this.name} and I can sleep`);
    }
    walk(){
        console.log(`Hi my name is ${this.name} and I can walk`);
    }
}

class Player extends Person{
    constructor(name,age,gender,sportName){
        super(name,age,gender);
        this.sportName=sportName;
    }
    play(){
        console.log(`I play ${this.sportName} and below are my details:
                     Name:${this.name}
                     Age:${this.age}
                     Gender:${this.gender}`);
    }
}


class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender);
        this.instituteName=instituteName;
    }
    teach(){
        console.log(`I am a teacher at ${this.instituteName} and below are my details:
                     Name:${this.name}
                     Age:${this.age}
                     Gender:${this.gender}`);
    }
}

class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender);
        this.kind=kind;
    }
    createArt(){
        console.log(`I am an Artish and create Art of ${this.kind} type and below are my details:
                    Name:${this.name}
                    Age:${this.age}
                    Gender:${this.gender}`);
    }
}


class Cricketer extends Player{
    constructor(name,age,gender,sportName,teamName){
        super(name,age,gender,sportName);
        this.teamName=teamName;
    }
    playCricket(){
        console.log(`I play ${this.sportName} and for team ${this.teamName}:
                     Name:${this.name}
                     Age:${this.age}
                     Gender:${this.gender}`);
    }
}


let teacherOne=new Teacher('Mansi',38,'Female','Rosary School');
let artistOne=new Artist('James  Filton',74,'Male','Abstract');
let cricketerOne=new Cricketer('Dhoni',52,'Male','Cricket','Chennai super Kings');