import React from 'react'
import './Banner.css'
import BannerImg from '../../assets/BannerImg.png'

const Banner = () => {
    return (
        <>
            <div className="BannerPart">
                <div className="container">
                    <div className="bannerFull">
                        <div className="BannerLeft">
                            <h1 className='bannerTitle'>We Are Digital Product Design Agency</h1>
                            <p className='bannersummary'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <div>
                                <button className='HeaderBtn Btn_Banner'>Contact Us</button>
                            </div>
                        </div>
                        <div className="bannerRight">
                            <picture>
                                <img src={BannerImg} alt={BannerImg} />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner