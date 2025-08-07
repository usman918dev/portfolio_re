import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Skills.css";
function GitHub() {
  return (
    <div className="github-container" id="github">
      <h1 className="project-heading" style={{ paddingBottom: "20px",color:"white" }}>
        Days I <strong style={{color:"#FF7E5F"}}>Code</strong>
      </h1>
      <GitHubCalendar
        username="usman918dev"
        blockSize={15}
        blockMargin={5}
        color="#FF7E5F"
        fontSize={16}
      />
    </div>
  );
}

export default GitHub;
