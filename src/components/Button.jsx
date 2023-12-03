import React from 'react'

const SButton = ({children, action, className }) => {
    return (
        <button 
            action={action}
            className={className}
        >
            {children}
        </button>
    )
}

export default SButton