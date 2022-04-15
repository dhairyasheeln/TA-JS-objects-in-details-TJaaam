/*

# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.


*/


//Using function to create object

function createUser(name,id,noOfProjects){
    let user={};
    user.name=name;
    user.id=id;
    user.noOfProjects=noOfProjects;

    user.getProjects=function(){
        return this.noOfProjects;
    }

    user.changeName=function(newName){
        oldName=this.name;
        this.name=newName;
        return oldName;
    }

    user.incrementProject=function(){
        this.noOfProjects=this.noOfProjects+1;
        return this.noOfProjects;
    }

    user.decrementProject=function(){
        this.noOfProjects=this.noOfProjects-1;
        return this.noOfProjects;
    }

    return user;
}

let user2=createUser('Aryan',2,20);



// Using Object.create (prototypal pattern)

function createUser(name,id,noOfProjects){
    let user=Object.create(createUser.prototype);
    user.name=name;
    user.id=id;
    user.noOfProjects=noOfProjects;

    return user;
}

createUser.prototype={
    getProjects:function(){
        return this.noOfProjects;
    },
    
    changeName:function(newName){
        oldName=this.name;
        this.name=newName;
        return oldName;
    },
    incrementProject:function(){
        this.noOfProjects=this.noOfProjects+1;
        return this.noOfProjects;
    },
    decrementProject:function(){
        this.noOfProjects=this.noOfProjects-1;
        return this.noOfProjects;
    }   
}

let user1=createUser('Ayush',1,10);

//Using Pseudoclassical Way


function CreateUser(name,id,noOfProjects){
    this.name=name;
    this.id=id;
    this.noOfProjects=noOfProjects;

}
CreateUser.prototype={
    getProjects:function(){
        return this.noOfProjects;
    },
    
    changeName:function(newName){
        oldName=this.name;
        this.name=newName;
        return oldName;
    },
    incrementProject:function(){
        this.noOfProjects=this.noOfProjects+1;
        return this.noOfProjects;
    },
    decrementProject:function(){
        this.noOfProjects=this.noOfProjects-1;
        return this.noOfProjects;
    }   
}

let user3=new CreateUser('Ayush',1,10);


//using Class

class user{
    constructor(name,id,noOfProjects){
        this.name=name;
        this.id=id;
        this.noOfProjects=noOfProjects;
    }
    getProjects(){
        return this.noOfProjects;
    }
    
    changeName(newName){
        let oldName=this.name;
        this.name=newName;
        return oldName;
    }
    incrementProject(){
        this.noOfProjects=this.noOfProjects+1;
        return this.noOfProjects;
    }
    decrementProject(){
        this.noOfProjects=this.noOfProjects-1;
        return this.noOfProjects;
    } 
}

let user4=new user('Saurabh',5,99);






