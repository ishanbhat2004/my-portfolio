"use client"
import Stars from '../helpers/Stars';

export default function Education() {
    const educationData = [
        {
          institution: "Purdue University",
          degree: "Bachelor of Science",
          graduated: "2025",
          gpa: "3.9/4.0",
          majors: ["Computer Science"],
          honors: ["Dean's List - All Semsters"],
          courses: ["C Programming", "DSA", "Machine learning and A.I.", "System Architecture"],
        },
        {
          institution: "Purdue University",
          degree: "Bachelor of Science",
          graduated: "2025",
          gpa: "3.9/4.0",
          majors: ["Mathematics"],
          honors: ["Dean's List - All Semsters"],
          courses: ["Multivariate Calculus", "Linear Algebra", "Differential Equations", "Real Analysis"],
        },
        {
          institution: "Purdue University",
          degree: "Bachelor of Science",
          graduated : "2025",
          gpa: "3.9/4.0",
          majors: ["Statistics"],
          honors: ["Dean's List - All Semsters"],
          courses: ["Intro to Probability", "Regression Analysis", "Time Series Analysis", "Stochastic Processes"]
        }
      ];
      
        return (
          <div id="education" className="flex flex-col h-auto max-h-[80vh] items-center overflow-auto mb-28">
  <h1 className="text-3xl text-black mb-8 font-silkscreen text-center">My Education</h1>
  <div className='flex flex-col w-full md:flex-row items-stretch'>
    {educationData.map((edu, index) => (
      <div key={index} className="bg-gray-400 shadow-md rounded-lg p-6 flex-1 m-4 relative text-white font-silkscreen">
        <img src={'purdue-logo.jpg'} alt={`${edu.institution} logo`} className="w-20 h-20 mb-4" />
        <h2 className="text-xl font-semibold mb-2">{edu.degree}</h2>
        <p className="text-white-400 text-lg">{edu.institution}</p>
        <p className="text-white-400 text-lg">Graduating in {edu.graduated}</p>
        <p className="text-white-400 text-lg text-black">GPA: {edu.gpa}</p>
        <ul className="list-disc list-inside mt-4 text-lg">
          {edu.majors.map((major, i) => (
            <li key={i} className="text-black">Major in {major}</li>
          ))}
          {edu.honors.map((honor, i) => (
            <li key={i} className="text-white-400">{honor}</li>
          ))}
          <li className="text-black">
            Important Courses:
            <ul className="list-disc list-inside ml-5">
              {edu.courses.map((course, i) => (
                <li key={i} className="text-black">{course}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    ))}
  </div>
</div>

        );
}