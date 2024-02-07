import React from 'react'
import profilePictures from '../../images/profilePicture.png'

export default function Header() {

    const scrollToElementById = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <div key={"presentation-header"} className='w-full h-[1000px] sm:h-[600px] flex flex-col sm:flex-row justify-around '>
            <div className="relative px-6  lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl  py-20">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Go to the GitHub Repo.{' '}
                            <a href="https://github.com/G14MB0/VisualCoding_public" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Discover More <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Enhance your performances with Visual Coding
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Complete framework built with Python, React and Electron to write code without writing code!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                onClick={() => scrollToElementById('VisualCoding')}
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a
                                onClick={() => scrollToElementById('Description')}
                                href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-xl sm:top-[calc(100%-35rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
            <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-800 sm:my-40 blur-xl "></div>
                <div class="flex items-center justify-center sm:px-24 sm:h-[600px]">
                    <div class="relative z-10 bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs min-w-[200px]">
                        <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto object-fit" src={profilePictures} alt="product designer" />
                        <h1 class="text-lg text-gray-700">Gianmaria Castaldini</h1>
                        <h3 class="text-sm text-gray-400">Software Engineer</h3>
                        <p class="text-xs text-gray-400 mt-4">
                            Dynamic Full Stack Developer & Software Engineer. Tech-savvy, innovative, driven.</p>
                        <div className='mt-8 bg-indigo-600 px-8 py-2  rounded-3xl'>
                            <a class=" text-gray-100 font-semibold uppercase " href="mailto:castaldini.gianmaria@gmail.com?subject=Texting from Github...">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
