import { Button, Container, Typography, TextField, Paper,TableHead, Table, TableRow, TableBody, TableCell } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style/SearchStudent.css'

export default function SearchStudent() {
  let studArr = useSelector((reducer) => reducer.StudReducer);

  let [id, setId] = useState(0);
  let [curArr, setCurArr] = useState([]);

  function searchStudent(stId){
    let found = studArr.find(student => student.Id == parseInt(stId));
    console.log("Found : "+found);
    return found;
  }

  function handleSubmit(e){
    e.preventDefault()
    setCurArr([searchStudent(id)])
  }

  useEffect(()=>{
    console.log("cur = "+curArr);
  },[curArr])

  return (
    <Container className='searchBlock'>
      <Typography variant='h3' color="textPrimary" className='h1'>Search Student By Id</Typography>
        <div className='searchContainer'>
          <Paper className='searchForm' >
            <TextField inputMode='numeric' onChange={ (e)=>setId(parseInt(e.target.value ? e.target.value : 0)) } value={id}/>
            <Button type='submit' onClick={handleSubmit} variant='contained' color='primary'>SEARCH</Button>
          </Paper>
        </div>
        <Table className='searchTable'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Dept</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { 
            (curArr.length > 0 && curArr[0] != undefined) ?
            curArr.map(student => {
                  return (
                      <TableRow key={student.Id}>
                          <TableCell>{student.Id}</TableCell>
                          <TableCell>{student.Name}</TableCell>
                          <TableCell>{student.Dept}</TableCell>
                          <TableCell>{student.Year}</TableCell>
                      </TableRow>
                  )
              })
          : <tr><td colSpan={4}>Not Matched</td></tr>}
          </TableBody>
        </Table>
    </Container>
  );
}
