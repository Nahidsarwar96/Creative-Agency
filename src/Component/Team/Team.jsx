import React from 'react'
import './Team.css'
import Heading from '../../CommonComponents/Heading.jsx'
import Team1 from '../../assets/Team1.png'
import Team2 from '../../assets/Team2.png'
import Team3 from '../../assets/Team3.png'

const Team = () => {
    const allTeamImg = [
        {
            id: 1,
            teamImg: Team1,
        },
        {
            id: 2,
            teamImg: Team2,
        },
        {
            id: 3,
            teamImg: Team3,
        },
    ]
    return (
        <>
            <div className="teamPart">
                <div className="container">
                    <div className="teamFull">
                        <div className="teamHeader">
                            <Heading headingStyle="tm" title="Our Expert Team Member" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
                        </div>
                        <div className="teamBottom">
                            {allTeamImg.map((item) => (
                                <picture key={item.id}>
                                    <img src={item.teamImg} alt={item.teamImg} />
                                </picture>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
