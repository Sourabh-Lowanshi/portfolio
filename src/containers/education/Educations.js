import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import { Helmet } from "react-helmet";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        {" "}
        <Helmet>
          <title>Educations | Sourabh Lowanshi</title>
          <meta
            name="description"
            content="View the degrees and educational qualifications of Sourabh Lowanshi, a Full Stack Developer. Learn about his academic background."
          />
        </Helmet>
        <div className="main" id="educations">
          <div className="educations-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="educations-header" style={{ color: theme.text }}>
                Degrees Received
              </h1>
            </Fade>
          </div>
          <div className="educations-body-div">
            {degrees.degrees.map((degree) => {
              return <DegreeCard degree={degree} theme={theme} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Educations;
