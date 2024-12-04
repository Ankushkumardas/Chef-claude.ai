import React from 'react'
import { PiChefHat } from "react-icons/pi";

function Hedaer() {
    return (
        <header className='border shadow-sm'>
            <div className='flex items-center justify-center gap-2 py-4'>
                <PiChefHat size={30}/>
                <h1 className='text-xl font-semibold'> Chef Claude.ai</h1>
            </div>
        </header>
    )
}

export default Hedaer
