// import React from 'react'
// import ProjectsList from "../constants/ProjectsList";
// import styled from "styled-components";
// import "../App.css";


// const ProjectScreen = () => {
//     let { pathName} = useParams();
//     console.log(pathName);
//     console.log(ProjectsList);
//     const project = ProjectsList.filter(item => item.pathName === pathName)[0];
   
//     console.log(project);
//     return (
//         <Wrapper>
//         <div className='projectContainer'>
//             <div className="secondaryContainer">
//     <h2>{project.title}</h2>
//     <h4>{project.paragraph}</h4>
//     </div>
//     <div className="imageContainer">
//     <img src={project.image3} alt="design concept"/>
//     </div>
//         </div>
//         </Wrapper>
//     )
// }

// const Wrapper = styled.div`
// .projectContainer{
//     display:flex;
//     flex-direction:column;
//     width: 100vw;
//     height: 100vh;
//     align-items:center;
//     background-color: var(--white);
//     border: 1px solid red;
// }
// .secondaryContainer{
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     border: 1px solid red;
//     width: 80%;
//     margin: 30px 0;
// }
// .imageContainer{
//     border: 1px solid blue;
// width: 90%;
// height: 60%;
// display:flex;
// flex-direction: column;
// align-items:center;
// justify-content:center;
// margin: 20px 0 40px;
// }
// .imageContainer img{
//     border: 2px solid orange;
//     max-width:30%;
// }
// h2{
//     font-family: roboto;
//     font-size: 54px;
//     color: var(--almostBlack);
//     font-weight: 600;
//     margin: 30px 0 ;
// }
// h4{
//     font-family: roboto;
//     font-size: 20px;
//     color: var(--almostBlack);
//     font-weight: 300;
//     margin: 0 0 30px;
  
// }


// @media (min-width: 769px){
//     .secondaryContainer{
//         height: calc(100%-50px);
       
//     }
//     h2{
//         font-family: roboto;
//         font-size: 90px;
//         color: var(--almostBlack);
//         font-weight: 600;
//         margin: 30px 0 ;
//     }
//     h4{
//         font-family: roboto;
//         font-size: 30px;
//         color: var(--almostBlack);
//         font-weight: 300;
//         margin: 0 0 30px;
//     }
//     .imageContainer img{
//         // border: 2px solid orange;
//       max-width:15%;
//     }
// }
// `

// export default ProjectScreen;