import React, {useState} from 'react';
import { Link, navigate, Redirect } from '@reach/router';
import { createProject } from '../services/projects';
import ProjectForm from '../components/ProjectForm';


const Create = (props) => {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // if (isSubmitted) return <Redirect to="/" />

  return (
    <div className="createPage">
    <h1>Work in Progress</h1>
    <h5><Link to='/'> Home </Link></h5>
    <h4 style={{"color": "rgb(107, 106, 106)"}}>Add a new project:</h4>

    <ProjectForm 
      onSubmitProp={createProject} 
      initialName=""  
      initialImageURL="" 
      initialPatternLocation=""
      initialDescription=""
      initialHookSize=""
      initialYarnInfo=""
     />
  </div>
  )
}

export default Create


// ** backup; before making separate services folder for axios calls

// import React, {useState} from 'react';
// import { Link, navigate } from '@reach/router';
// import axios from 'axios';
// import ProjectForm from '../components/ProjectForm';

// // eslint-disable-next-line
// export default () => {
//   const [errors, setErrors] = useState([]); 

//   const createProject = (project) => {
//     axios.post(`http://localhost:8000/api/projects/new`, project)
//     .then(res=> {
//         console.log(res)
//         navigate("/")
//     })
//     .catch(err=>{ console.log(err)
//       const errorResponse = err.response.data.errors; 
//       const errorArr = []; 
//       for (const key of Object.keys(errorResponse)) { 
//           errorArr.push(errorResponse[key].message)
//       }
//       setErrors(errorArr);
//   });
// }


//   return (
//     <div className="createPage">
//       <h1>Work in Progress</h1>
//       <h5><Link to='/'> Home </Link></h5>
//       <h4 style={{"color": "rgb(107, 106, 106)"}}>Add a new project:</h4>
//       {errors.map((err, index) => <p style={{"color": "red"}} key={index}> {err} </p>)}
//       <ProjectForm 
//         onSubmitProp={createProject} 
//         initialName=""  
//         initialImageURL="" 
//         initialPatternLocation=""
//         initialDescription=""
//         initialHookSize=""
//         initialYarnInfo="" />
//     </div>
//   );
// }
