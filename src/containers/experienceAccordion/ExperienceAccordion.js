import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { Helmet } from "react-helmet";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <Helmet>
          <title>Experience | Sourabh Lowanshi</title>
          <meta
            name="description"
            content="Explore the professional experience of Sourabh Lowanshi, including roles in Java, .NET, React, and Full Stack Development."
          />
        </Helmet>
        <div className="experience-accord">
          <Accordion>
            {this.props.sections.map((section) => {
              return (
                <Panel
                  className="accord-panel"
                  title={section["title"]}
                  key={section["title"]}
                  overrides={{
                    Header: {
                      style: () => ({
                        backgroundColor: `${theme.body}`,
                        border: `1px solid`,
                        borderRadius: `5px`,
                        borderColor: `${theme.headerColor}`,
                        marginBottom: `3px`,
                        fontFamily: "Google Sans Regular",
                        color: `${theme.text}`,
                        ":hover": {
                          color: `${theme.secondaryText}`,
                        },
                      }),
                    },
                    Content: {
                      style: () => ({
                        backgroundColor: `${theme.body}`,
                      }),
                    },
                  }}
                >
                  {section["experiences"].map((experience, index) => {
                    return (
                      <ExperienceCard
                        index={index}
                        totalCards={section["experiences"].length}
                        experience={experience}
                        theme={theme}
                      />
                    );
                  })}
                </Panel>
              );
            })}
          </Accordion>
        </div>
      </>
    );
  }
}

export default ExperienceAccordion;
