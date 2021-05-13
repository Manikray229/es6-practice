class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunessa school "
    }
}

const student1 = new student (12, "manik");
const student2 = new student (12, "socuna");
console.log(student1, student2);