import React from 'react'
import { useParams } from "react-router-dom";
import ProjectsList from "../constants/ProjectsList";

const ProjectScreen = () => {
    let { pathName } = useParams();
    // console.log(pathName);
    // console.log(ProjectsList);
    const project = ProjectsList.filter(item => item.pathName === pathName)[0];
    console.log(project);
    return (
        <div>
            
        </div>
    )
}

export default ProjectScreen;