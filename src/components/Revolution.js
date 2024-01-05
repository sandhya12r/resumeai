import React from 'react'
import Button from './Button'

function Revolution() {
    return (
        <div className='revolution'>
            <div className='revolution--div__text'>

                <div className='revolution--div__head'>
                    <h1>Join the AI-Powered Revolution in Resume Building</h1> <div className='revolution--div__pic'></div>

                </div>
                <p className='revolution--div__p'>
                    Creating an outstanding resume has never been this effortless. With AI Resume Maker, you're not just crafting a document—you're shaping your professional future.
                </p>
            </div>
            <Button buttonText='Get started today' buttonType='secondary'/>
        </div>
    )
}

export default Revolution
