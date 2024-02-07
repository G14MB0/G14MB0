import React from 'react'

import picture_1 from "../../images/picture_1.png"
import picture_2 from "../../images/picture_2.png"

export default function ImageWithText() {
    return (
        <div id='Description' className='bg-slate-50'>
            <div key={"presentation-imagewithtext"} className='flex flex-col sm:flex-row  pt-4 px-2 max-w-[1400px] mx-auto'>
                <div className='max-w-[600px] object-cover rounded-lg overflow-hidden m-12'>
                    <img src={picture_1} className='' />
                </div>
                <div className='m-4 flex flex-col items-center justify-center'>
                    <div className="text-center sm:text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
                            Visualize your Ideas.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Complete framework built with Python, React and Electron to write code without writing code!
                        </p>
                    </div>
                </div>
            </div>
            <div key={"presentation-imagewithtext"} className='flex flex-col-reverse sm:flex-row  mt-6 px-2 max-w-[1400px] mx-auto'>

                <div className='m-4 flex flex-col items-center justify-center'>
                    <div className="text-center sm:text-right">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
                            Built with Python.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Complete framework built with Python, React and Electron to write code without writing code!
                        </p>
                    </div>
                </div>
                <div className='max-w-[600px] object-cover rounded-lg overflow-hidden m-12'>
                    <img src={picture_2} />
                </div>
            </div>
        </div>
    )
}
