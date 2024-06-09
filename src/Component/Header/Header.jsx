import React from 'react'
import Logo from '../../assets/Logo.png'
import './Header.css'
const Header = () => {
    const AlllistItem = ["Home", "About Us", "Service", "Blog", "Contact"]
    return (

        <>

            <div className="HeaderPart">
                <div className="container">
                    <div className="headerFull">
                        <div className='headerLogo'>
                            <picture>
                                <img src={Logo} alt={Logo} />
                            </picture>
                        </div>
                        <div>

                            <ul className='listItem'>
                                {AlllistItem.map((item) =>
                                    (<li><a href="#" className='listItem__word'>{item}</a></li>)
                                )}

                            </ul>
                        </div>
                        <div>
                            <button className='HeaderBtn'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header