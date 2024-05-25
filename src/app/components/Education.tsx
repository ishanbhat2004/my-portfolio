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
          courses: ["Object-Oriented Programming", "C Programming", "Discrete Math", "Data Structures", "Analysis of Algorithms", "Data Mining and Machine learning", "Computer Architecture", "Systems Architecture", "Artificial Intelligence"]
        },
        {
          institution: "Purdue University",
          degree: "Bachelor of Science",
          graduated: "2025",
          gpa: "3.9/4.0",
          majors: ["Mathematics"],
          honors: ["Dean's List - All Semsters"],
          courses: ["Calculus I", "Calculus II", "Multivariate Calculus", "Linear Algebra", "Differential Equations", "Real Analysis"],
        },
        {
          institution: "Purdue University",
          degree: "Bachelor of Science",
          graduated : "2025",
          gpa: "3.9/4.0",
          majors: ["Statistics"],
          honors: ["Dean's List - All Semsters"],
          courses: ["Intro to Probability", "Intro to Statistics", "Regression Analysis", "Statistical Inference", "Time Series Analysis", "Stochastic Processes"]
        }
      ];
      
        return (
          <div id="education" className="flex flex-col h-[70vh] items-center">
            <h1 className="text-3xl text-black mb-8 font-silkscreen text-center">My Education</h1>
            <div className='flex flex-col w-full md:flex-row items-stretch'>
              {educationData.map((edu, index) => (
                <div key={index} className="bg-gray-400 shadow-md rounded-lg p-6 flex-1 m-4 relative text-white font-silkscreen">
                  <img src={'purdue-logo.jpg'} alt={`${edu.institution} logo`} className="w-20 h-20 mb-4" />
                  <h2 className="text-xl font-semibold mb-2">{edu.degree}</h2>
                  <p className="text-white-400 text-lg">{edu.institution}</p>
                  <p className="text-white-400 text-lg">Graduating in {edu.graduated}</p>
                  <p className="text-white-400 text-lg">GPA: {edu.gpa}</p>
                  <ul className="list-disc list-inside mt-4 text-lg">
                    {edu.majors.map((major, i) => (
                      <li key={i} className="text-black">Major in {major}</li>
                    ))}
                    {edu.honors.map((honor, i) => (
                      <li key={i} className="text-white-400">{honor}</li>
                    ))}
                    <li className="text-black">
                      Courses:
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


 {/* <h2 className="text-xl font-semibold mb-2">{edu.degree}</h2>
                <p className="text-gray-700">{edu.institution}</p>
                <p className="text-gray-700">Graduated in {edu.graduated}</p>
                <p className="text-gray-700">GPA: {edu.gpa}</p>
                <ul className="list-disc list-inside">
                  {edu.majors.map((major, i) => (
                    <li key={i}>Major in {major}</li>
                  ))}
                  {edu.minors.map((minor, i) => (
                    <li key={i}>Minor in {minor}</li>
                  ))}
                  {edu.honors.map((honor, i) => (
                    <li key={i}>{honor}</li>
                  ))}
                </ul> */}