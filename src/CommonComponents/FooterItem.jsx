import React from 'react'

const FooterItem = ({ title, list }) => {
    return (
        <>

            <div>
                <h2 className='footerItemHeading'>{title ? title : "Nai"}</h2>
                <ul className='footerItemList'>
                    {list.map((listItem) => (
                        <li><a href="#"></a>{listItem ? listItem : "No"}</li>
                    ))}

                </ul>
            </div>

        </>
    )
}

export default FooterItem