import React from 'react'
import './Care.css'
import Heading from '..//../CommonComponents/Heading.jsx'
import care1 from '../../assets/Care1.png'
import { FaStar } from "react-icons/fa";
import Care2 from '../../assets/care2.png'

const Care = () => {
    const allcareBox = [
        {
            id: 1,
            careImg: care1,
            icon: <FaStar />,
            careSummary: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            careTitle: "Mahid Ahmed",
            careSubtitle: "UX Designer"
        },
        {
            id: 2,
            careImg: care1,
            icon: <FaStar />,
            careSummary: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            careTitle: "Nahid Sarwar",
            careSubtitle: "Web Developer"
        },
        {
            id: 3,
            careImg: care1,
            icon: <FaStar />,
            careSummary: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            careTitle: "Hasan Miya",
            careSubtitle: "Video editor"
        },
    ]
    return (
        <>
            <div className="carePart">
                <div className="container">
                    <div className="careFull">
                        <div className="careHeading">
                            <Heading headingStyle="Cr" title="We Care About Our Customer Experience Too" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
                        </div>
                        <div className="CareBottom">
                            {allcareBox.map((item) => (
                                <div className="carebox" key={item.id}>
                                    <picture>
                                        <img src={item.careImg} alt={item.careImg} />
                                    </picture>
                                    <picture className='invited'>
                                        <img src={Care2} alt={Care2} />
                                    </picture>
                                    <div className='stars'>
                                        {[...new Array(5)].map(() => (
                                            <li><FaStar /></li>
                                        ))}
                                    </div>
                                    <p className='careBoxSummary'>{item.careSummary}</p>
                                    <h4 className='careBoxTitle'>{item.careTitle}</h4>
                                    <p className='careBoxSubTitle'>{item.careSubtitle}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Care