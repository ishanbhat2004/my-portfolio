import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import Typography from '@mui/material/Typography';


export default function Experience() {

    const experienceData = [
        {
          role: "SWE Intern",
          company: "CapitalOne",
          duration: "June 2025 - August 2025",
          description: "As a Software Engineer Intern at CapitalOne, I developed a comprehensive data pipeline using Python and AWS services, including Lambda, S3, and DynamoDB. This pipeline automated the extraction, transformation, and loading of data from various sources into a centralized data warehouse, significantly improving data accessibility and analysis capabilities. I also implemented robust security measures to ensure data integrity and compliance with industry standards.",
        }, 
        {
          role: "SWE Intern",
          company: "Cylus | Railway Cybersecurity",
          duration: "May 2024 - August 2024",
          description: "Working on project \"Eve\", an application for streamlining the analysis of pcaps across different network environments, I enhanced and created advanced backend logic for pcap submissions and made the UI more user-friendly. I also handled Docker and Kubernetes deployment and updated AWS Lambda functions to boost functionality and performance.",
        },
        {
          role: "SWE Intern",
          company: "Amazon Web Services",
          duration: "Sept 2023 - Feb 2024",
          description: "I spearheaded core API enhancements across three repositories to improve data retrieval, addressing critical user needs. I introduced a findingIds query parameter to fetch related alerts. These updates significantly enhanced user experience and operational efficiency within the OpenSearch ecosystem.",
        },
    ];

    return (
        <div id="experience" className='min-h-full'>
            <h1 className="text-3xl text-black mb-8 font-silkscreen text-center">My Experience</h1>
            <Timeline position="alternate" sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
                },
            }}>
                {experienceData.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align={index % 2 === 0 ? 'right' : 'left'}
                            variant="body2"
                            color="text.secondary"
                        >
                            {item.duration}
                        </TimelineOppositeContent>
    
                        <TimelineSeparator>
                            <TimelineConnector sx={{ visibility: index === 0 ? 'hidden' : 'visible' }} />
    
                            <TimelineDot color="primary">
                                <WorkIcon />
                            </TimelineDot>
    
                            <TimelineConnector sx={{ visibility: index === experienceData.length - 1 ? 'hidden' : 'visible' }} /> 
                        </TimelineSeparator>
    
                        <TimelineContent sx={{ py: '12px', px: 2, textAlign: 'left' }}>
                            <Typography variant="h6" component="span">
                                {item.role}
                            </Typography>
                            <Typography>{item.company}</Typography>
                            <Typography>{item.description}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
}