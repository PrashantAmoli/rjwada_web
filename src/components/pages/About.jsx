import 'bootstrap/dist/css/bootstrap.min.css';

import TeamPhoto from "../../images/team-img.png";
import Rating1Img from "../../images/rating1.png";
import Leadership1Img from "../../images/leadership1.png";
import Pattern1Img from "../../images/pattern1.png";
import Linkedin1Img from "../../images/linkedin1.png";

import AbhinavVermaImg from "../../images/abhinav-verma.png";
import AdityaAnandImg from "../../images/aditya-anand.png";
import AnkitImg from "../../images/ankit.png";
import RajvardhanRayImg from "../../images/rajvardhan-ray.png";
import SugandhMalikImg from "../../images/sugandh-malik.png";
import YashVardhanSinghImg from "../../images/yash-vardhan-singh.png";


import "./About.css"


const About = () => {
    return (
        <div className="about-page ">
            <div className="about-text1 " >
                <div className="about-text1-center">
                    <div>
                        <span className="white-text">We at rjwada are creating high</span>
                    </div>
                    <div>
                        <span className="blue-text">customer engagement <span className="white-text">and</span>  low return</span>
                    </div>
                    <div>
                        <span className="white-text">  <span className="blue-text">rates</span> with our future ready AR tech</span>
                    </div>
                </div>
            </div>



            <div className="team-photo">
                <img src={TeamPhoto} alt="" />
            </div>




            <div className="about-text2 my-5">
                <div className="about-us-box">
                    <h1 className="my-5">About us</h1>
                    <div className="details">
                        <p>
                            RJWADA is an augmented reality based startup, an initiative by IITD students. Enhancing the online.
                        </p>
                        <p>
                            Shopping experience for our users is our sole motto. Easy, Reliable, Trustworthy ain't just attractive
                        </p>
                        <p>
                            adjectives we mean it. We are shaping the future of shopping via our AR and 3D try on.
                        </p>
                        <p>
                            We are the present. <br />
                            We are the future.
                        </p>
                        <p>

                        </p>
                    </div>
                </div>
            </div>




            <div className="vision">
                <div className="">
                    <h1 className="title">Our Vision </h1>
                </div>
                <div className="visioncards">
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4">
                            <div className="card card1">

                                <img src={Rating1Img} alt="" style={{ width: "85px" }} />
                                <h1 className="title">Experience</h1>
                                <p className="desc">We take credit, offering the world with the most beautiful and intuitive experiences, that almost feel real through our AR/VR technologies.</p>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card card2">
                                <img src={Leadership1Img} alt="" style={{ width: "85px" }} />
                                <h1 className="title">Leader</h1>
                                <p className="desc">Aspiring to be the number one Global leader in the ecommerce business of AR/VR technologies </p>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card card3">

                                <img src={Pattern1Img} alt="" style={{ width: "85px" }} />
                                <h1 className="title">Seamless</h1>
                                <p className="desc">Our goal is to provide seamless tryon experiences for people, be it any corner of the world. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="creators">
                <div className="title-box">
                    <span className="title">
                        Meet our team of  <span className="blue-text">creators, designers,</span> and world-class <span className="blue-text">problem solvers.</span>
                    </span>
                </div>

                <div className="creatorscards">
                    <div className="row row-cols-1 row-cols-md-3">

                        <div className="col mb-4">
                            <div className="card" style={{backgroundImage: `url(${AbhinavVermaImg})`}}>
                            <div className="linkedin">
                                    <div className="info">
                                        <span className="name">Abhinav Verma</span>
                                        <span className="role">Founder and CEO</span>
                                    </div>
                                    <img src={Linkedin1Img} alt="" style={{width: "55px"}} />
                                </div>
                            </div>
                        </div>

                        <div className="col mb-4">
                            <div className="card " style={{backgroundImage: `url(${YashVardhanSinghImg})`}}>
                            <div className="linkedin">
                                    <div className="info">
                                        <span className="name">Yash Vardhan Singh </span>
                                        <span className="role">Co-founder and MD</span>
                                    </div>
                                    <img src={Linkedin1Img} alt="" style={{width: "55px"}} />
                                </div>
                            </div>
                        </div>

                        <div className="col mb-4">
                            <div className="card " style={{backgroundImage: `url(${AnkitImg})`}}>
                            <div className="linkedin">
                                    <div className="info">
                                        <span className="name">Ankit</span>
                                        <span className="role">AR Head</span>
                                    </div>
                                    <img src={Linkedin1Img} alt="" style={{width: "55px"}} />
                                </div>
                            </div>
                        </div>


                        <div className="col mb-4">
                            <div className="card " style={{backgroundImage: `url(${AdityaAnandImg})`}}>
                            <div className="linkedin">
                                    <div className="info">
                                        <span className="name">Aditya Anand</span>
                                        <span className="role">Brand success manager</span>
                                    </div>
                                    <img src={Linkedin1Img} alt="" style={{width: "55px"}} />
                                </div>
                            </div>
                        </div>


                        <div className="col mb-4">
                            <div className="card " style={{backgroundImage: `url(${RajvardhanRayImg})`}}>
                            <div className="linkedin">
                                    <div className="info">
                                        <span className="name">Rajvardhan Ray</span>
                                        <span className="role">UI/UX Designer</span>
                                    </div>
                                    <img src={Linkedin1Img} alt="" style={{width: "55px"}} />
                                </div>
                            </div>
                        </div>

                        <div className="col mb-4">
                            <div className="card " style={{backgroundImage: `url(${SugandhMalikImg})`}}>
                            <div className="linkedin">
                                    <div className="info">
                                        <span className="name">Sugandh Malik</span>
                                        <span className="role">3D Blender designer</span>
                                    </div>
                                    <img src={Linkedin1Img} alt="" style={{width: "55px"}} />
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>



        </div>
    )
}



export default About
