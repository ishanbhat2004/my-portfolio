"use client"

import Link from 'next/link';
import Typewriter from 'typewriter-effect'; 
import Stars from '../helpers/Stars';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {

    interface NavItemProps {
        href: string;
        children: React.ReactNode;
    }

    const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
        <Link href={href}>
            <h1 className="text-xl text-white tracking-wide transform hover:scale-110 transition-transform duration-300 ease-in-out font-silkscreen">
                {children}
            </h1>
        </Link>
    );

    return (
        <div className="h-[67vh] w-full bg-black flex flex-col relative">
            <Stars />
            <div className="fixed inset-x-0 top-0 flex flex-wrap items-center justify-center space-x-6 sm:space-x-4 mt-4 bg-gray-800 p-4 rounded-full border border-gray-600 w-fit mx-auto z-50">
                <NavItem href="/">Home</NavItem>
                <NavItem href="#education">Education</NavItem>
                <NavItem href="#experience">Experience</NavItem>
                <NavItem href="/projects">Projects</NavItem>
                <NavItem href="/skills">Skills</NavItem>
            </div>
            <div className="pt-24 pb-3 md:pt-20 flex flex-grow-[2] justify-between w-full mt-4 md:space-x-0 sm:space-x-2">
                <div className="flex justify-end items-center w-1/2 z-10 lg:ml-0 md:ml-0 sm:ml-0">
                    <div>
                        <img src="/portfolio-image.jpg" alt="Your description" />
                    </div>
                </div>
                <div className='flex items-center justify-center w-1/2 text-white md:text-3xl sm:space-x-4 font-silkscreen'>
                    <div className='md:w-1/2 sm:w-full text-center'>
                        <Typewriter
                                options={{
                                strings: ['Hello, My Name is Ishan Bhat!', 'I am a software enthusiast with concentrations in Development, Data Science, and A.I.'],
                                autoStart: true,
                                loop: true,
                                }}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-grow-[1] justify-center items-center space-x-12 z-10'>
                <a
                    href="https://github.com/ishanbhat2004"
                    target='_blank'
                    className="inline-flex items-center bg-white text-black font-bold py-6 px-8 rounded-full border border-gray-400 hover:bg-gray-200 text-lg"
                >
                    <FaGithub className="mr-2" />
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/ishan-bhat14/"
                    target='_blank'
                    className="inline-flex items-center bg-gray-900 text-white font-bold py-6 px-8 rounded-full border border-gray-400 hover:bg-gray-800 text-lg"
                >
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}


