import React from 'react'
import Button from './Button'
import Flag from './Flag'

function Main() {
  return (
    <div className='main '>
      <div className='main--div__first ' >
        <div className='main--div__second'>
        </div >
        <div className='main--div__text'>
          <h1>Welcome to <span>AI Resume
            Maker !</span> Your path to
            professional success !</h1>
          <div>
            <Button buttonText='Start building' buttonType='primary' />
          </div>
        </div>
        <div className='flag1'>
          <Flag flagText='Templates Library' />
        </div>
        <div className='flag2'>
          <Flag flagText='Real-time preview' />
        </div>
        <div className='flag3'>
          <Flag flagText='Keyword Optimization' />
        </div>
        <div className='flag4'>
          <Flag flagText='Dynamic Content Generation' />
        </div>
        <div className='main--div__third'>
          <div className='main--div__picture'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
