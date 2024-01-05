import React from 'react'

function Flag({flagText}) {
  return (
    <div className='flag'>
        <div className='flag--div__logo'>
        </div>
        <div className='flag--div__text'>
          {flagText}
        </div>
    </div>
  )
}

export default Flag
