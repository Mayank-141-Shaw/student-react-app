export class Student{

    studentId = 0;
    studentName = "";
    studentDept = "";
    studentYear = "";

    constructor(id, name, dept, year){
        this.studentId = id;
        this.studentName = name;
        this.studentDept = dept;
        this.studentYear = year;
    }

    set Id(id){ this.studentId = id }
    get Id(){ return this.studentId }

    set Name(name){ this.studentName = name }
    get Name(){ return this.studentName }

    set Dept(dept){ this.studentDept = dept }
    get Dept(){ return this.studentDept }
    set Year(year){ this.studentYear = year }
    get Year(){ return this.studentYear }
}