import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import ProjectForm from '../components/ProjectForm';

// eslint-disable-next-line
export default (props) => {

    const [project, setProject] = useState(); 
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/projects/${props.id}` )
            .then(res => {
                setProject(res.data);
                setLoaded(true);
            })
            .catch(err=> {
                console.log(err.response)
                navigate("/error")
            })
    }, [])

    const updateProject = project => {
        axios.put(`http://localhost:8000/api/projects/${props.id}`, project)
            .then(res => {
                console.log(res)
                // navigate to the main page after updating the form
                navigate("/")
            })
            // can I set two conditionals under .catch?? 
            // does it have to be under .put or can it be .get of edit page?
            .catch(err=>{ console.log(err.response)
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

  return (
    <div className="updatePage">

{errors.map((err, index) => <p style={{"color": "red"}} key={index}> {err} </p>)}
      <h1>Favorite projects</h1>
      <h5><Link to='/'> Home </Link></h5>
      <h4 style={{"color": "rgb(107, 106, 106)"}}>Edit this project:</h4>

        {loaded && (
        <ProjectForm 
            onSubmitProp={updateProject}
            initialName={project.name}
            initialGenre={project.genre}
            initialDesc={project.desc}
            initialImageURL={project.imageURL}
            initialPatternLocation={project.patternLocation}
            initialDescription={project.description} 
            initialHookSize={project.hookSize} 
            initialYarnInfo={project.yarnInfo}
        />)}
      

    </div>
  );
}


// https://mongoosejs.com/docs/api.html#model_Model.update
// [options.runValidators=false] «Boolean» if true, runs update validators on this command. Update validators validate the update operation against the model's schema.