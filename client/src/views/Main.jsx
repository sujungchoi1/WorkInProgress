import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import axios from 'axios';
import {Button} from 'semantic-ui-react';

// eslint-disable-next-line
export default () => {
    const [ projects, setProjects ] = useState([]);
    // const [names, setNames] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/projects")
            // .then(res=>setProducts(res.data.products)) if res.json({products: allProducts}) instead of getting it as an array from controller
            .then(res=>{
                setProjects(res.data)
            })  
            .catch(err=>console.log("Error: ", err))     
    }, [])

    const deleteProject = (projectId) => {
        axios.delete('http://localhost:8000/api/projects/' + projectId)
            .then(res => {
                setProjects(projects.filter(auth => auth._id !== projectId));
            })
            .catch(err=>console.log("Error: ", err))     
    }

    ////// CHECKBOX ///////
    const updateProject = (changedProject, id) => {
        setProjects(projects.map(project => ( project._id === id ? changedProject : project)
        ));
      }

    const updateAPI = (data, id) => {
        axios.put(`http://localhost:8000/api/projects/${id}`, data)
        .then(res => {
            console.log(res.data)
            updateProject(res.data, id);
        })
        .catch(err=>console.log(err.response));
    }
    
    const checkBoxHandler = (completed, id) => {
        updateAPI({completed: completed}, id);
        }
    ////////////////////////////////////

    return (

        <div className="mainPage">
            {/* <Nav /> */}
            <h1>Work in Progress</h1>
            <Button basic color='blue'>BUTTON</Button>
            <h4><Link to='/new'> Add an project! </Link></h4>
            <h5>We have quotes by:</h5>

            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th className="firstColumn" scope="col">project</th>
                    <th className="secondColumn" scope="col">Options available</th>
                    </tr>
                </thead>
                <tbody>

                    {projects.map((value, idx)=>{
                    return <tr key={idx}>
                            <td className="projectName" key={idx}> 
                               <Link to={`/detail/${value._id}` }>{value.name}</Link>
                            </td>
                            <td>
                                <Button type="button" basic color="green">
                                <Link to={`/edit/${value._id}`}>
                                <span style={{"color": "green"}}>Edit</span>
                                </Link> 

                                </Button>
                                
                                <Button onClick={(e)=>{deleteProject(value._id)}} 
                                type="button" basic color="orange">Delete</Button>

                                <input 
                                type="checkbox" 
                                checked={value.completed}
                                onChange={e=>checkBoxHandler(e.target.checked, value._id)}>

                                </input>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>

        </div>
    )
}
