import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { deleteStudent } from '../actions/StudActions';

export default function DeleteStudent() {
  
    let {id} = useParams();
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(deleteStudent(parseInt(id)));
    },[])
    return (
        <>
            {console.log("Student "+id+" deleted")}
            <Navigate to="/show"></Navigate>
        </>
        
    );
}
