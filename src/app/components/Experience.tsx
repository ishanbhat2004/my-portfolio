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
          company: "Cylus | Railway Cybersecurity",
          duration: "May 2024 - Present",
          description: "Working on project \"Eve\", an application for streamlining the analysis of pcaps across different network environments, I enhanced and created advanced backend logic for pcap submissions and made the UI more user-friendly. I also handled Docker and Kubernetes deployment and updated AWS Lambda functions to boost functionality and performance.",
        },
        {
          role: "SWE Opensource Intern",
          company: "AWS/Amazon Web Services",
          duration: "Sept 2023 - Feb 2024",
          description: "I spearheaded core API enhancements across three repositories to improve data retrieval, addressing critical user needs. I introduced a findingIds query parameter to fetch related alerts. These updates significantly enhanced user experience and operational efficiency within the OpenSearch ecosystem.",
        },
        {
            role: "ML Intern",
            company: "Forsk Technologies",
            duration: "May 2021 - Oct 2021",
            description: "During my internship at Forsk Coding School, I mastered industry standards and developed a sentiment analysis model using advanced machine learning and deep learning techniques. I also engineered and deployed a web application with Flask and Beautiful Soup for data extraction, leveraging AWS for cloud hosting.",
          },
          {
            role: "Research Intern",
            company: "Arwizon Digital",
            duration: "Apr 2020 - Dec 2020",
            description: "During my internship at Arwizon Digital Private Limited, I improved machine learning model efficiency by 200% through advanced pre-processing techniques in collaboration with IIT alumni. I developed innovative solutions that were recognized internally and presented to over 100 company employees, showcasing their impact and potential.",
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