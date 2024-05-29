import Image from 'next/image';

export default function Skills() {
    
    const skills = [
        { name: 'TypeScript', src: '/icons/TypeScript.svg' },
        { name: 'JavaScript', src: '/icons/javascript.svg' },
        { name: 'React', src: '/icons/React-Dark.svg' },
        { name: 'Node.js', src: '/icons/NodeJS-Dark.svg' },
        { name: 'Docker', src: '/icons/Docker.svg' },
        { name: 'Bash', src: '/icons/Bash-Dark.svg' },
        { name: 'BitBucket', src: '/icons/BitBucket-Dark.svg' },
        { name: 'Bootstrap', src: '/icons/Bootstrap.svg' },
        { name: 'Python', src: '/icons/Python-Dark.svg' },
        { name: 'C', src: '/icons/C.svg' },
        { name: 'CPP', src: '/icons/CPP.svg' },
        { name: 'Java', src: '/icons/Java-Dark.svg' },
        { name: 'HTML', src: '/icons/HTML.svg' },
        { name: 'CSS', src: '/icons/CSS.svg' },
        { name: 'Elixir', src: '/icons/Elixir-Dark.svg' },
        { name: 'Github', src: '/icons/Github-Dark.svg' },
        { name: 'MySQL', src: '/icons/MySQL-Dark.svg' },
        { name: 'AWS', src: '/icons/AWS-Dark.svg' },
        { name: 'Kubernetes', src: '/icons/Kubernetes.svg' },
        { name: 'Matlab', src: '/icons/Matlab-Dark.svg' },
        { name: 'Linux', src: '/icons/Linux-Dark.svg' },
        { name: 'R', src: '/icons/R-Dark.svg' },
        { name: 'PyTorch', src: '/icons/PyTorch-Dark.svg' },
        { name: 'QT', src: '/icons/QT-Dark.svg' },
        { name: 'OpenCV', src: '/icons/OpenCV-Dark.svg' },
        { name: 'NextJS', src: '/icons/NextJS-Dark.svg' },
        { name: 'MongoDB', src: '/icons/MongoDB.svg' },
        { name: 'React', src: '/icons/React-Dark.svg' },
        { name: 'Scikit Learn', src: '/icons/ScikitLearn-Dark.svg' },
        { name: 'Spring', src: '/icons/Spring-Dark.svg' },
        { name: 'Tailwind', src: '/icons/TailwindCSS-Dark.svg' },
        { name: 'TensorFlow', src: '/icons/TensorFlow-Dark.svg' },
    ];

    
    return (
        <div id="skills" className="container mx-auto py-12 px-6">
            <h1 className="text-3xl text-black mb-8 font-silkscreen text-center">My Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image src={skill.src} alt={skill.name} width={64} height={64} className="mb-2"/>
                        <p className="text-center text-lg font- font-silkscreen">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}