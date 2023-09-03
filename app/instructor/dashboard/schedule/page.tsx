"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';





const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));



export default function PutGrade(){

    try{
        const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="my-dashboard-container w-full h-full">
            <div className="my-dashboard-container-center m-auto w-4/5 box-border py-40">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Week Day #1 - Sunday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <ul className='list-none'>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>Week Day #2 - Monday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                <ul className='list-none'>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Week Day #3 - Tuesday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                <ul className='list-none'>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography>Week Day #4 - Wednesday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                <ul className='list-none'>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                        <li><span>time - 8.00 AM ~ 9.30 AM</span>advance webtect<span></span></li>
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    );





    }catch(erro: any){
        console.log(erro);
    }

    
    
}