import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

// eslint-disable-next-line
export default (props) => {
    // for GET request
    const [project, setProject] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/projects/${props.id}`)
            .then(res => {
                setProject(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <div>
            {loaded && (
            <div>
            <h1 style={{"marginBottom":"20px"}}>{project.name}</h1>
            <h4>Genre: {project.genre}</h4>
            <h4>Notes: {project.desc}</h4>
            {/* <h4>Description: {author.description}</h4> */}
            <div className="edit_delete">
                <h5><Link to={"/edit/" + project._id }>EDIT</Link></h5>

            </div>

            <h5><Link to='/'> Back to Main Page </Link></h5>
            </div>
            )}
        </div>
    )
}
