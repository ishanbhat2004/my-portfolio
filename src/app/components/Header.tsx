"use client"

import Link from 'next/link';
import { useState } from 'react';
import Stars from '../helpers/Stars';

export default function Header() {

    interface NavItemProps {
        href: string;
        children: React.ReactNode;
    }

    const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
        <Link href={href}>
            <h1 className="text-xl text-blue-300 tracking-wide transform hover:scale-110 transition-transform duration-300 ease-in-out font-silkscreen">
                {children}
            </h1>
        </Link>
    );

    return (
        <div className="h-[70vh] w-full bg-black flex flex-col relative">
            <Stars />
            <div className="w-full flex flex-col">
            <div className="flex flex-wrap items-center justify-center space-x-6 sm:space-x-4 mt-4 bg-gray-800 p-4 rounded-full border border-gray-600 w-fit mx-auto">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/projects">Projects</NavItem>
                    <NavItem href="/skills">Skills</NavItem>
                    <NavItem href="/experience">Experience</NavItem>
                    <NavItem href="/education">Education</NavItem>
                </div>
                <h1>
                    {/* {I want to work on uploading my image, and writing a few lines about me side by side and then complete this part off by making buttons for my github and linkedIn accounts} */}
                </h1>
            </div>
        </div>
    );
}


