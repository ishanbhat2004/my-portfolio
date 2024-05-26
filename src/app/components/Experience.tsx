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
          role: "Web Developer",
          company: "M3 Digital - Contract",
          duration: "September 2021 - February 2022",
          description: "Front-end development for a variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain. Developed high-quality landing pages and front end features using HTML, CSS, SCSS, JavaScript and Liquid.",
        },
        {
          role: "Junior Developer",
          company: "YouPay",
          duration: "February 2022 - November 2022",
          description: "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for merchants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.",
        },
        {
            role: "Junior Developer",
            company: "YouPay",
            duration: "February 2022 - November 2022",
            description: "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for merchants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.",
          },
    ];

    return (
        <div id="experience">
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

                        <TimelineConnector />

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