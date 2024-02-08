import { EmailOutlined, EmailRounded, GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-around sm:h-50 border-t mx-10 sm:py-5 pb-4'>
            <div className='sm:w-1/3 sm:mx-12 sm:px-6'>
                <div className="sm:text-left">
                    <h1 className="text-sm font-bold tracking-tight text-gray-900 sm:text-lg mt-4 sm:mt-12 sm:mt-0">
                        Disclaimer
                    </h1>
                    <p className="mt-2 sm:mt-6 text-sm leading-6 text-gray-600">
                        This site serves purely as a portfolio showcasing a full-stack project,
                        with no intention to sell or market any product.
                        The described software has been coded by me, is fully functional and publicly available under the MIT license.
                    </p>
                </div>
            </div>
            <div className='sm:w-1/3 sm:mx-12 sm:px-6'>
                <div className="sm:text-left">
                    <h1 className="text-sm font-bold tracking-tight text-gray-900 sm:text-lg mt-12 sm:mt-0">
                        Repositories
                    </h1>
                    <a className='flex items-center mt-2 sm:mt-6'
                        href="https://github.com/G14MB0/VisualCoding_public"
                        target="_blank">
                        <div className='flex items-center'>
                            <GitHub fontSize='small' />
                        </div>
                        <p className="ml-4 text-sm leading-6 text-gray-600">
                            The FrontEnd Repo
                        </p>
                    </a>
                    <a className='flex items-center mt-2'
                        href="https://github.com/G14MB0/VisualCoding_backend_public"
                        target="_blank">
                        <div className='flex items-center'>
                            <GitHub fontSize='small' />
                        </div>
                        <p className="ml-4 text-sm leading-6 text-gray-600">
                            The BackEnd Repo
                        </p>
                    </a>
                </div>
            </div>
            <div className='sm:w-1/3 sm:mx-12 sm:px-6'>
                <div className="sm:text-left">
                    <h1 className="text-sm font-bold tracking-tight text-gray-900 sm:text-lg mt-12 sm:mt-0">
                        Contacts
                    </h1>
                    <a className='flex items-center mt-2 sm:mt-6'
                        href="mailto:castaldini.gianmaria@gmail.com?subject=Texting from Github..."
                        target="_blank">
                        <div className='flex items-center'>
                            <EmailOutlined fontSize='small' />
                        </div>
                        <p className="ml-4 text-sm leading-6 text-gray-600">
                            castaldini.gianmaria@gmail.com
                        </p>
                    </a>
                    <a className='flex items-center mt-2'
                        href="https://github.com/G14MB0"
                        target="_blank">
                        <div className='flex items-center'>
                            <GitHub fontSize='small' />
                        </div>
                        <p className="ml-4 text-sm leading-6 text-gray-600">
                            https://github.com/G14MB0
                        </p>
                    </a>
                    <a className='flex items-center mt-2'
                        href="https://www.linkedin.com/in/gianmaria-castaldini/"
                        target="_blank">
                        <div className='flex items-center'>
                            <LinkedIn fontSize='small' />
                        </div>
                        <p className="ml-4 text-sm leading-6 text-gray-600">
                            https://www.linkedin.com/in/gianmaria-castaldini/
                        </p>
                    </a>
                </div>
            </div>

            {/* <div className='w-1/3 mx-12 px-12'>
                <div className="text-center sm:text-left">
                    <h1 className="text-sm font-bold tracking-tight text-gray-900 sm:text-lg ">
                        Visualize your Ideas.
                    </h1>
                    <p className="mt-6 text-sm leading-6 text-gray-600">
                        <b> Dive</b> into a world where complex coding becomes visually intuitive with our state-of-the-art framework.
                        <br></br><b> Imagine</b> a place where your strategic insights materialize into functioning models through a simple drag-and-drop interface <br></br><b>Welcome</b> to the next evolution of programming.
                    </p>
                </div>
            </div> */}
        </div>
    )
}
