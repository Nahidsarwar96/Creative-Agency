import React from 'react'
import './News.css'
import Heading from '../../CommonComponents/Heading.jsx'
import News1 from '../../assets/News1.png'
import News2 from '../../assets/News2.png'
import News3 from '../../assets/News3.png'
import { IoPersonOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";



const News = () => {
    const allNewsBox = [
        {
            id: 1,
            newsImg: News1,
        },
        {
            id: 2,
            newsImg: News2,
        },
        {
            id: 3,
            newsImg: News3,
        }
    ]
    return (
        <>
            <div className="newsPart">
                <div className="container">
                    <div className="Newsfull">
                        <div className="newsheading">
                            <Heading headingStyle="Ns" title="Our Letest News" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
                        </div>

                        <div className="NewsBottom">
                            {allNewsBox.map((item) => (
                                <div className="NewsBox" key={item.id}>
                                    <picture>
                                        <img src={item.newsImg} alt={item.newsImg} />
                                    </picture>
                                    <div className="newsIcon">
                                        <div className="manIcon">
                                            <span><IoPersonOutline /></span>
                                            <p>Admin</p>
                                        </div>
                                        <div className="dateIcon">
                                            <span><SlCalender /></span>
                                            <p>07/06/2024</p>
                                        </div>
                                    </div>
                                    <h3 className="newsBoxTitle">
                                        Business Plans That Fit Your Best Blog
                                    </h3>
                                    <p className="newsBoxSummary">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                                    <a href="#" className='newsLink'>Learn More</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}

export default News