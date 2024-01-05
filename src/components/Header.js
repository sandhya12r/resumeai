import React from 'react'
import Button from './Button';

function Header() {
    return (
        <header className='header container'>
            <div className='header--div__logo'>
                <svg width="51" height="43" viewBox="0 0 51 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.8" width="32.4734" height="38.9337" rx="3" fill="#7757F4" />
                    <rect opacity="0.5" width="29.9292" height="36.2798" rx="3" transform="matrix(0.965983 0.258606 -0.259032 0.965869 21.7734 0.21875)" fill="#EBE6FD" />
                </svg>
                <h1 className='header--logo__text'>Resume.AI</h1>
            </div>
            <div className='header--div__buttons'>
                <Button buttonText='Sign In' buttonType='secondary'/>
                <Button buttonText='Create My Resume' buttonType='primary'/>

            </div>
        </header>
    )
}

export default Header
