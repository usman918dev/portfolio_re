import React from "react";
// import myImg from "../assets/developer-icon.svg";
import { ReactComponent as MySvg } from "../assets/student_16499178.svg"
function Home() {
    return (
        <div className="home-about-section" id="about" style={{ width: "100%", padding: "2rem 0" }}>
            <div className="home-about-container" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                <div className="home-about-content" style={{ flex: 2, minWidth: 250, padding: "1rem" }}>
                    <h1 className="home-about-title" style={{ fontSize: "2.6em" }}>
                        LET ME <span className="purple"> INTRODUCE </span> MYSELF
                    </h1>
                    <p className="home-about-body">
                        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                        <br /><br />
                        I am fluent in classics like
                        <b className="purple"> C++, Javascript and Go. </b>
                        <br /><br />
                        My field of Interest's are building new&nbsp;
                        <b className="purple">Web Technologies and Products </b> and also in areas related to{" "}
                        <b className="purple">Blockchain.</b>
                        <br /><br />
                        Whenever possible, I also apply my passion for developing products with <b className="purple">Node.js</b> and
                        <b className="purple"> Modern Javascript Library and Frameworks</b>
                        &nbsp;like <b className="purple">React.js and Next.js</b>
                    </p>
                </div>
                <MySvg style={{ fill: "#FF7E5F" }} />
                {/* <div className="home-about-avatar" style={{ flex: 1, minWidth: 200, textAlign: "center", padding: "1rem" }}>
          <img src={myImg} alt="avatar" className="avatar-img" style={{ maxWidth: "100%", borderRadius: "50%" }} />
        </div> */}
            </div>
        </div>
    );
}

export default Home;