import {Student} from "./Student"

export class StudentService{

    constructor(){
        this.studArray = [
            new Student(101, 'Hari', 'CSE', 'SE'),
            new Student(102, 'Om', 'IT', 'FE')
        ]
        
    }

    getAllStudents(){
        return this.studArray;
    }

    addStudent(student){
        console.log(student)
        let newStudent = new Student(
            parseInt(student.studentId), 
            student.studentName, 
            student.studentDept, 
            student.studentYear
            );
        this.studArray.push(newStudent);
        console.log(this.studArray)
        return this.studArray;
    }

    searchStudent(stId){
        return this.studArray.find(student => student.studentId == stId);
    }

    deleteStudent(stId){
        this.studArray = this.studArray.filter(student => student.studentId != stId);
        return this.studArray;
    }

    updateStudent(newStudentData){
        let originalStudent = this.studArray.find(student => student.Id == newStudentData.studentId)
        let index = this.studArray.indexOf(originalStudent);

        if(newStudentData.studentName!="") originalStudent.Name = newStudentData.studentName;
        if(newStudentData.studentDept!="") originalStudent.Dept = newStudentData.studentDept;
        if(newStudentData.studentYear!="") originalStudent.Year = newStudentData.studentYear;
        
        this.studArray[index] = originalStudent;
        return this.studArray;
    }
}