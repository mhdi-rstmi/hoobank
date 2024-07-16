import React from 'react'

function Button({ styles }) {
    return (
        <button className={`py-4 px-6 bg-blue-gradient rounded-[10px] font-poppins font-medium text-[18px] text-primary outline-none ${styles}`} type='button'> Get Started</button>
    )
}

export default Button