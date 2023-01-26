import { Container } from "react-bootstrap";

import Vector1 from "../../images/vector1.png";
import Vector from "../../images/location-marker.png";

import "./Careers.css"

const Careers = () => {
    return (
        <div className="career-page">
            <Container fluid>
            <div className="hiringbtn">
                <button>We're hiring!</button>
            </div>
            <div className="career-text1">
                <span>Be part of our <span style={{color: "#0D99FF"}} >Mission</span> </span>
            </div>
            <div className="career-text2">
                <span>We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.</span>
            </div>

            <div className="buttons">
                <button>View all</button>
                <button>Operations</button>
                <button>Development</button>
                <button>Marketing</button>
                <button>Management</button>
                <button>Finance</button>
                <button>Customer Service</button>
            </div>

            <div className="hrline"></div>

            <div className="jobs">

                <div className="job">
                    <div className="jobdetail">
                        <span className="jobtitle">Product Designer</span>
                        <span className="jobdesc">We're looking for a mid-level product designer to join our team.</span>
                        
                        <div className="jobdetailbuttons">
                        <button> <img src={Vector} alt="" style={{width: "24px"}} /> 100% remote</button>
                            <button> <img src={Vector1} alt="" style={{width: "24px"}}  /> Full time</button>
                        </div>

                    </div>
                    <div className="jobapply">
                        <span>Apply</span>
                    </div>
                </div>

            <div className="hrinnerline"></div>

            <div className="job">
                    <div className="jobdetail">
                        <span className="jobtitle">Product Designer</span>
                        <span className="jobdesc">We're looking for a mid-level product designer to join our team.</span>
                        
                        <div className="jobdetailbuttons">
                        <button> <img src={Vector} alt="" style={{width: "24px"}} /> 100% remote</button>
                            <button> <img src={Vector1} alt="" style={{width: "24px"}}  /> Full time</button>
                        </div>

                    </div>
                    <div className="jobapply">
                        <span>Apply</span>
                    </div>
                </div>


                <div className="hrinnerline"></div>


                <div className="job">
                    <div className="jobdetail">
                        <span className="jobtitle">Product Designer</span>
                        <span className="jobdesc">We're looking for a mid-level product designer to join our team.</span>
                        
                        <div className="jobdetailbuttons">
                            <button> <img src={Vector} alt="" style={{width: "24px"}} /> 100% remote</button>
                            <button> <img src={Vector1} alt="" style={{width: "24px"}}  /> Full time</button>
                        </div>

                    </div>
                    <div className="jobapply">
                        <span>Apply</span>
                    </div>
                </div>



                <div className="hrinnerline"></div>




                <div className="job">
                    <div className="jobdetail">
                        <span className="jobtitle">Product Designer</span>
                        <span className="jobdesc">We're looking for a mid-level product designer to join our team.</span>
                        
                        <div className="jobdetailbuttons">
                        <button> <img src={Vector} alt="" style={{width: "24px"}} /> 100% remote</button>
                            <button> <img src={Vector1} alt="" style={{width: "24px"}}  /> Full time</button>
                        </div>

                    </div>
                    <div className="jobapply">
                        <span>Apply</span>
                    </div>
                </div>

            </div>
            </Container>
            
        </div>
    )
}

export default Careers;
