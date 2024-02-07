import React, { useEffect } from 'react'
import Header from './components/Header'
import ImageWithText from './components/ImageWithText'

function Presentation() {
    useEffect(() => {
        console.log("presentation")
    }, [])

    return (
        <div key={"Presentation"} className='w-full flex items-center '>
            <Header />
        </div>
    )
}


export default React.memo(Presentation);