import React from 'react'

function UserInterface() {
  return (
    <div className='container user'>
      <div className='user--main__pic'>
        <div className='user--rec__left'></div>
        <div className='user--rec__right'></div>
        <div className='user--cir__right'></div>
      </div>
      <div className='user--div__right'>
        <div className='user--div__text'>
          <h1>User-Friendly Interface</h1>
          <p>No more struggling with complex formatting tools. Our intuitive interface makes it easy to enter your information, choose from a variety of templates, and customize your resume effortlessly.</p>
        </div>
        <div className='user--div__arrow'></div>
      </div>
    </div>
  )
}

export default UserInterface
