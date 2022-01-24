import { Button, Container, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { searchStudent, updateStudent } from '../actions/StudActions';
import { Student } from './Student';

import "./style/UpdateStudent.css"

export default function UpdateStudent() {

  let dispatch = useDispatch();

  let studArr = useSelector((reducer) => reducer.StudReducer);

  let {id} = useParams();
  // console.log(id)

  function searchStudent(stId){
    let found = studArr.find(student => student.Id == parseInt(stId));
    // console.log("Found : "+found);
    return found;
  }

  let student = searchStudent(id);
  // console.log(student)

  const [stud, setStudent] = useState(new Student(
                                parseInt(student.studentId), 
                                student.studentName, 
                                student.studentDept, 
                                student.studentYear
                              ));

  let [flag, setFlag] = useState(false);

  

    function handleSubmit(e){
        
        dispatch(updateStudent(stud));
        e.preventDefault();
        console.log(stud)
        setFlag(true);
    }

    let LabelStyle = {
      fontSize:'1.5rem'
  }

  return (
    <Container className="updateStudentBlock">
          <Typography variant='h3' color="textPrimary" className='h3'>Update Student Details</Typography>
          {
              (flag) ? 
              <Navigate to="/show"></Navigate> :
            
              <TableContainer component={Paper} style={{ backgroundColor:'rgba(233, 233, 233, 0.9)' }} >
                <Table sx={{ minWidth:650 }}>
                  <TableBody style={{ textAlign:"center" }}>
                  <TableRow>
                    <TableCell><InputLabel style={LabelStyle}>Update Name </InputLabel></TableCell>
                    <TableCell><TextField inputMode='text' onChange={(e)=>setStudent({...stud, ["studentName"]:e.target.value})} value={stud.Name}/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell><InputLabel style={LabelStyle}>Update Dept</InputLabel></TableCell>
                    <TableCell><TextField inputMode='text' onChange={(e)=>setStudent({...stud, ["studentDept"]:e.target.value})} value={stud.Dept}/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell><InputLabel style={LabelStyle}>Update Year</InputLabel></TableCell>
                    <TableCell><TextField inputMode='text'  value={stud.Year} onChange={(e)=>setStudent({...stud, ["studentYear"]:e.target.value})}/></TableCell>
                  </TableRow>
                  </TableBody>
                </Table>

                <Button type='submit' variant="contained" color='primary' startIcon={<Add/>} onClick={handleSubmit}>Update Student</Button>
              </TableContainer>           
          }
      </Container>
    
);
}

