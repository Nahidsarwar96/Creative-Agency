import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/FooterLogo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import FooterItem from '../../CommonComponents/FooterItem.jsx'



const Footer = () => {
    return (
        <>
            <div className="footerPart">
                <div className="container">
                    <div className="footerFull">
                        <div className="footerLeft">

                            <picture className="footerLogo">
                                <img src={footerLogo} alt={footerLogo} />
                            </picture>
                            <p className='footerLeftSummary'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.'</p>
                            <div className="footerIcon">
                                <span className='facebook'><FaFacebook />
                                </span>
                                <span className='twiter'><FaTwitter />
                                </span>
                            </div>



                        </div>
                        <div className="footerRight">
                            <FooterItem title="Company" list={["About Us", "Work", "Latest News", "Careers"]} />
                            <FooterItem title="Product" list={["Prototype Us", "Plans & Pricing", "Customers", "Integrations"]} />
                            <FooterItem title="Support" list={["Help Desk", "Sales", "Become a Partner", "Developers"]} />
                            <FooterItem title="Contact" list={["524 Broadway , NYC", "+1 777 - 978 - 5570"]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer