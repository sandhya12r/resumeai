import React from 'react'
import Button from './Button'

function Guidance() {
    return (
        <div className='container guidance'>
            <div className='container guidance--div__top '>
                <div className='guidance--div__first'>
                    <div className='guidance--div__text'>
                        <h1>Intelligent Guidance</h1>
                        <p>Our AI-powered platform provides step-by-step guidance as you build your resume. From selecting the right template to tailoring content, our AI ensures your resume reflects your unique strengths.</p>
                        <Button buttonText='Try now' buttonType='secondary' />
                    </div>
                </div>
                <div className='guidance--div__second'>

                </div>
            </div>
            <div className='guidance--div__bottom container'>
                <div className='guidance--bottom__cont'>
                    <div className='guidance--div__pic'>
                        <div className='guidance--div__pic1'></div>
                    </div>
                    <p>Step by step guidance</p>
                </div>
                <div className='guidance--bottom__cont'>
                    <div className='guidance--div__pic'>
                        <div className='guidance--div__pic2'></div>
                    </div>
                    <p>Select from curated templates</p>
                </div>
                <div className='guidance--bottom__cont'>
                    <div className='guidance--div__pic'>
                        <div className='guidance--div__pic3'></div>
                    </div>
                    <p>Realtime resume preview</p>
                </div>
            </div>
        </div>
    )
}

export default Guidance
