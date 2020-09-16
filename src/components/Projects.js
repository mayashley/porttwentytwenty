import React, { Component } from "react";
import SingleProject from "./SingleProject";
import ProjectsList from "../constants/ProjectsList";

class Projects extends Component {
  render() {
    return (
      <div>
        {ProjectsList.map((item, index) => 
          <SingleProject
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            paragraph={item.paragraph}
            imageLeft={item.imageLeft}
            image1={item.image1}
            image2={item.image2}
          />
        )}
        {/* <SubTitle msg="lastest work" />
        <Title msg="roam hr" />
        <Paragraph msg="Full website design for a concept team collaboration platform. This website design includes a beautiful blog and crisp clean designs for a modern look and feel." /> */}
      </div>
    );
  }
}
export default Projects;
