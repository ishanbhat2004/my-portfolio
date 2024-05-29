import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-200 py-12 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-8 md:mb-0 md:flex md:items-center md:justify-center md:flex-1 px-6">
                    <p className='font-silkscreen'>
                        Thank you for visiting my website! I hope you enjoyed learning more about me. I&apos;m always eager to connect with new people, so feel free to reach out if you have any questions or just want to say hello. Let&apos;s stay in touch!
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/ishan-bhat14/" target="_blank" rel="noopener noreferrer">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.282c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.282h-3v-5.429c0-1.297-.025-2.966-1.807-2.966-1.808 0-2.084 1.414-2.084 2.873v5.522h-3v-10h2.879v1.366h.042c.401-.758 1.381-1.556 2.845-1.556 3.045 0 3.609 2.006 3.609 4.617v5.573z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/ishanbhat2004" target="_blank" rel="noopener noreferrer">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.166c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.234 1.838 1.234 1.07 1.834 2.809 1.303 3.495.998.107-.775.42-1.303.764-1.603-2.665-.3-5.467-1.333-5.467-5.93 0-1.311.469-2.382 1.236-3.223-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.004.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.841 1.236 1.912 1.236 3.223 0 4.61-2.807 5.625-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.22.694.825.576 4.765-1.587 8.2-6.083 8.2-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    <a href="mailto:ishanbhat2004@gmail.com">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm-12-6.713v12.584l8.401-6.184-8.401-6.4zm1.215 13.379l7.785-5.724 3 2.182 3-2.182 7.785 5.724h-21.57zm22.785-1.795v-11.379l-8.401 6.4 8.401 6.184z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="container mx-auto text-center mt-12">
                <p className='font-silkscreen'>
                    A <a href="https://github.com/ishanbhat2004/my-portfolio" className="text-blue-500" target="_blank" rel="noopener noreferrer">free and open-source</a> creation, licensed MIT
                </p>
                <p>© Ishan Bhat, 2024</p>
            </div>
        </footer>
    );
}
