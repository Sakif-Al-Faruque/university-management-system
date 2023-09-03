"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
    course_name: string,
    section: string,
    no_of_students: number,
    action: string
  ) {
    return { course_name, section, no_of_students, action };
  }


  const rows = [
    createData('computer networks', 'A', 6.0, 'Add Marks'),
    createData('computer graphics', 'C', 9.0, 'Add Marks'),
    createData('computer graphics', 'E', 9.0, 'Add Marks'),
    createData('advance webtech', 'B', 16.0, 'Add Marks'),
  ];

export default function PutGrade(){
    return (
        <div className="my-dashboard-container w-full h-full">
            <div className="my-dashboard-container-center m-auto w-4/5 box-border py-40">
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='bg-red-600'>
          <TableRow>
            <TableCell><span className='text-white'>Course name</span></TableCell>
            <TableCell align="right"><span className='text-white'>Section</span></TableCell>
            <TableCell align="right"><span className='text-white'>No. of Students</span></TableCell>
            <TableCell align="right"><span className='text-white'>Action</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.course_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.course_name}
              </TableCell>
              <TableCell align="right">{row.section}</TableCell>
              <TableCell align="right">{row.no_of_students}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    );
    
}