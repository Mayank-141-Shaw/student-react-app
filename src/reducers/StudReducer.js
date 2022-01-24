import { StudentService } from '../components/StudentService';
let studImpl=new StudentService();

export const StudReducer=(state=[...studImpl.studArray],action)=>{
        switch(action.type){
                case 'SHOW_ALL_STUDENTS': {
                        state= studImpl.getAllStudents();
                        return state;
                }
                case 'DELETE_STUDENT': {
                        state= studImpl.deleteStudent(action.payload);                
                        return state;
                }
                case 'ADD_STUDENT': {
                    state = studImpl.addStudent(action.payload);
                    return state;
                }
                case 'UPDATE_STUDENT': {
                    state = studImpl.updateStudent(action.payload);
                    return state;
                }
                default: return state;
        }
}