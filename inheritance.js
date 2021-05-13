class Parent {
    constructor(){
        this.fatherName = "Manik";
    }
}


class Child extends Parent {
    constructor(name){
        super();
        this.name = name; 
    }
    getFullName(){
        return this.name + this.fatherName;
    }
}

const baby = new Child ("Anrlod");
console.log(baby.getFullName());