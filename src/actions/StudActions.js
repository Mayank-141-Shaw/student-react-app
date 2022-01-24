export const showAllStudents = () =>{ return  { type:"SHOW_ALL_STUDENTS" } }

export const deleteStudent = (stid) =>{ return { type:"DELETE_STUDENT", payload: stid } }

export const addStudent = (newStudent) =>{ return { type:"ADD_STUDENT", payload: newStudent } }

export const updateStudent = (updatedValue) =>{ return { type:"UPDATE_STUDENT", payload: updatedValue } }
