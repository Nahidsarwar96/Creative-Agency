import React from 'react';
import './Service.css';
import Heading from '../../CommonComponents/Heading';
import { FaBars } from "react-icons/fa";
import { MdWebStories } from "react-icons/md";
import { FaDigitalOcean } from "react-icons/fa6";
import { SiTaichigraphics } from "react-icons/si";
import { GiSpiderWeb } from "react-icons/gi";
import { MdAutoAwesomeMotion } from "react-icons/md";




const Service = () => {
    const allServiceBox = [
        {
            id: 1,
            icon: <FaBars />,
            title: "UI/UX Design",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."

        },
        {
            id: 2,
            icon: <MdWebStories />,
            title: "Web Development",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."

        },
        {
            id: 3,
            icon: <FaDigitalOcean />,
            title: "Digital Marketing",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."

        },
        {
            id: 4,
            icon: <SiTaichigraphics />,
            title: "Graphic Design",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."

        },
        {
            id: 5,
            icon: <GiSpiderWeb />,
            title: "Web Design",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."

        },
        {
            id: 6,
            icon: <MdAutoAwesomeMotion />,
            title: "Motion Design",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."

        }

    ]
    return (
        <div className="servicePart">
            <div className='container'>
                <div>
                    <Heading className='ph' title='Our Services' description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' headingStyle='serviceStyle' />
                </div>
                <div className="serviceBox">
                    {allServiceBox.map((item) => (
                        <div className="serviceBoxOne" key={item.id}>
                            <span className='serviceicon'>{item.icon ? item.icon : "something is missing"}</span>
                            <h3 className='serviceBoxTitle'>{item.title ? item.title : "something is missing"}</h3>
                            <p className='serviceBoxSummary'>{item.description ? item.description : "something is missing"}</p>
                        </div>
                    ))}


                </div>

            </div>
        </div>
    )
}

export default Service