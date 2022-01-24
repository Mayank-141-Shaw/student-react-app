import { Student } from './Student'
import { Add } from "@material-ui/icons"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../actions/StudActions';
import { Navigate } from 'react-router-dom';
import {Button, Container, Field, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core'
import "./style/AddStudent.css"

import { TextField, Typography } from '@material-ui/core';

export default function AddStudent() {

    let stud = new Student();
    const [student, setStudent] = useState(stud);

    let [flag, setFlag] = useState(false);

    let dispatch = useDispatch();

    function handleSubmit(e){
        
        dispatch(addStudent(student));
        e.preventDefault();
        console.log(student)
        setFlag(true);
    }

  let LabelStyle = {
      fontSize:'1.5rem'
  }

  return (
      <Container className="addStudentBlock">
          <Typography variant='h3' color="textPrimary" className='h3'>Add Student Details</Typography>
          {
              (flag) ? 
              <Navigate to="/show"></Navigate> :
            
              <TableContainer component={Paper} style={{ backgroundColor:'rgba(233, 233, 233, 0.9)' }} >
                <Table sx={{ minWidth:650 }}>
                  <TableBody style={{ textAlign:"center" }}>
                  <TableRow>
                    <TableCell><InputLabel style={LabelStyle}>Enter ID:</InputLabel></TableCell>
                    <TableCell><TextField inputMode='numeric' onChange={(e)=>setStudent({...student, ["studentId"]:e.target.value})} value={student.Id}/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell><InputLabel style={LabelStyle}>Enter Name:</InputLabel></TableCell>
                    <TableCell><TextField inputMode='text' onChange={(e)=>setStudent({...student, ["studentName"]:e.target.value})} value={student.Name}/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell><InputLabel style={LabelStyle}>Enter Dept:</InputLabel></TableCell>
                    <TableCell><TextField inputMode='text' onChange={(e)=>setStudent({...student, ["studentDept"]:e.target.value})} value={student.Dept}/></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell><InputLabel style={LabelStyle}>Enter Year:</InputLabel></TableCell>
                    <TableCell><TextField inputMode='text'  value={student.Year} onChange={(e)=>setStudent({...student, ["studentYear"]:e.target.value})}/></TableCell>
                  </TableRow>
                  </TableBody>
                </Table>

                <Button type='submit' variant="contained" color='primary' startIcon={<Add/>} onClick={handleSubmit}>Add Student</Button>
              </TableContainer>           
          }
      </Container>
  );
}

