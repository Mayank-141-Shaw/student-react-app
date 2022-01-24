import { Button, Container, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';
import "./style/ShowStudents.css"

import { Delete, Update } from '@material-ui/icons'

export default function ShowStudents() {

    let studArr = useSelector((reducer) => reducer.StudReducer);
    console.log("state = "+studArr);

  return (
      <Container className='showBlock'>
        <Typography variant='h3' color="textPrimary" className='h1'>List of Students</Typography>
        <Table className='showTable'>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Dept</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell colSpan={2}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    studArr.map(student => {
                    return (
                        <TableRow key={student.Id}>
                            <TableCell>{student.Id}</TableCell>
                            <TableCell>{student.Name}</TableCell>
                            <TableCell>{student.Dept}</TableCell>
                            <TableCell>{student.Year}</TableCell>
                            <TableCell className="actionBtn">
                                <NavLink  to={`/delete/${student.Id}`}>
                                    <Button color='primary' variant='contained' startIcon={<Delete/>}>DELETE</Button>
                                </NavLink>
                            </TableCell>
                            <TableCell className="actionBtn">
                                <NavLink to={`/update/${student.Id}`}>
                                    <Button color='secondary' variant='contained' startIcon={<Update/>}>UPDATE</Button>
                                </NavLink>
                            </TableCell>
                        </TableRow>
                )
            })        
                }
            </TableBody>
        </Table>
      </Container>
  )
}
