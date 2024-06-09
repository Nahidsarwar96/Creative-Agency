import React from 'react'
import './Portfolio.css'
import Heading from '../../CommonComponents/Heading.jsx'
import PortfolioImg1 from '../../assets/Portfolio.png'
import Portfolio2 from '../../assets/Portfolio2.png'
import Portfolio3 from '../../assets/Portfolio3.png'
import Portfolio4 from '../../assets/Portfolio4.png'
import Portfolio5 from '../../assets/Portfolio5.png'
import Portfolio6 from '../../assets/Portfolio6.png'
import Portfolio7 from '../../assets/Portfolio7.png'
import Portfolio8 from '../../assets/Portfolio8.png'


const Portfolio = () => {
    const allPortfolioImg = [
        {
            id: 1,
            portImg: PortfolioImg1,
            title: "Graphic Design",
            summary: "See Details"

        },
        {
            id: 2,
            portImg: Portfolio2,
            title: "Graphic Design",
            summary: "See Details"

        },
        {
            id: 3,
            portImg: Portfolio3,
            title: "Graphic Design",
            summary: "See Details"

        },

        {
            id: 4,
            portImg: Portfolio4,
            title: "Graphic Design",
            summary: "See Details"

        },

        {
            id: 5,
            portImg: Portfolio5,
            title: "Graphic Design",
            summary: "See Details"

        },

        {
            id: 6,
            portImg: Portfolio6,
            title: "Graphic Design",
            summary: "See Details"

        },

        {
            id: 7,
            portImg: Portfolio7,
            title: "Graphic Design",
            summary: "See Details"

        },

        {
            id: 8,
            portImg: Portfolio8,
            title: "Graphic Design",
            summary: "See Details"

        },



    ]
    return (
        <>
            <div className="PortfolioPart">
                <div className="container">
                    <div className="portFolioFull">
                        <div className="portFolioHeading">
                            <Heading headingStyle='ph'
                                title={'Our Work Portfolio'} description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'} />
                        </div>
                        <div className='portfolioPic'>

                            {allPortfolioImg.map((item) => (
                                <div className="portFolioImg" key={item.id}>
                                    <img src={item.portImg} alt="" className='PortfolioPicture' />
                                    <div className="portfolioOverlay">
                                        <div className="overlayContent">
                                            <h4 className='portOverlayTitle'>{item.title ? item.title : 'No title'}</h4>
                                            <p className='portOverlaySummary'>{item.summary ? item.summary : "No summary"}</p>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio


