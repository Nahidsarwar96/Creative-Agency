import React from 'react'

const Heading = ({ headingStyle, title, description }) => {

    return (
        <div className={headingStyle}>
            <h2 className='serviceTitle'>{title ? title : 'No title'}</h2>
            <p className='servicesummary'>{description ? description : 'No description'}</p>
        </div>
    )
}

export default Heading