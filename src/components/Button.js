import React from 'react'

function Button({buttonType, buttonText}) {
  return (
    <button className={`btn btn--btn__${buttonType}`}>{buttonText}
    </button>
  )
}

export default Button
