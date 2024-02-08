import React from 'react'

import picture_1 from "../../images/picture_1.png"
import picture_2 from "../../images/picture_2.png"

export default function ImageWithText() {
    return (
        <div id='Description' className='relative'>
            <div
                className="absolute inset-x-0 top-[500px] -z-10 transform-gpu overflow-hidden blur-2xl sm:top-0"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'clip-path: polygon(54.88% 34.9%, 73.25% 0%, 90.55% 19.17%, 73.25% 53.28%, 46.1% 51.58%, 86.21% 72.79%, 73.25% 78.16%, 27.25% 100%, 5.9% 90.88%, 42.63% 72.79%, 15.68% 53.28%, 29.38% 40.6%)',
                    }}
                />
            </div>
            <div key={"presentation-imagewithtext1"} className='flex flex-col sm:flex-row  pt-4 px-2 max-w-[1400px] mx-auto'>
                <div className='max-w-[600px] object-fit rounded-lg overflow-hidden m-4 sm:m-12'>
                    <img src={picture_1} className='' />
                </div>
                <div className='m-4 flex flex-col items-center justify-center'>
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
                            Visualize your Ideas.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            <b> Dive</b> into a world where complex coding becomes visually intuitive with our state-of-the-art framework.
                            <br></br><b> Imagine</b> a place where your strategic insights materialize into functioning models through a simple drag-and-drop interface <br></br><b>Welcome</b> to the next evolution of programming.
                        </p>
                    </div>
                </div>
            </div>
            <div key={"presentation-imagewithtext2"} className='flex flex-col-reverse sm:flex-row  mt-6 px-2 max-w-[1400px] mx-auto'>

                <div className='m-4 flex flex-col items-center justify-center'>
                    <div className="text-center sm:text-right">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
                            Built Over Python.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Crafted in the versatile language of Python and powered by the seamless integration of React and Electron, our framework redefines coding: it's where your vision comes to life, code-free.
                        </p>
                    </div>
                </div>
                <div className='max-w-[600px] object-fit rounded-lg overflow-hidden m-4 sm:m-12'>
                    <img src={picture_2} />
                </div>
            </div>
        </div>
    )
}
