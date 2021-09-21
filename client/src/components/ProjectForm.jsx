import React, { useState } from 'react'
import { Link } from '@reach/router'
import { Button, Form } from 'semantic-ui-react';

    // eslint-disable-next-line
export default (props) => {
    const { errors, initialName, initialImageURL, initialPatternLocation,initialDescription, initialHookSize, initialYarnInfo, onSubmitProp } = props;
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(initialName); 
    const [imageURL, setImageURL] = useState(initialImageURL); 
    const [patternLocation, setPatternLocation] = useState(initialPatternLocation); 
    const [hookSize, setHookSize] = useState(initialHookSize); 
    const [yarnInfo, setYarnInfo] = useState(initialYarnInfo); 
    const [description, setDescription] = useState(initialDescription); 
    // const [isSubmitted, setIsSubmitted] = useState(false);

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        onSubmitProp({name, imageURL, patternLocation, description, hookSize, yarnInfo});
        // setName("");
        // setIsSubmitted(true);
    }

    return (

        <Form onSubmit={onSubmitHandler}>
        <Form.Input 
            label='Name (*required)' 
            type="text" 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
        />
        <Form.Input 
            label='Image URL' 
            type="text" 
            onChange={(e) => setImageURL(e.target.value)} 
            value={imageURL} 
        />
        <Form.Input 
            label='Pattern Location' 
            type="text" 
            onChange={(e) => setPatternLocation(e.target.value)} 
            value={patternLocation} 
        />
        <Form.Group widths='equal'>
            <Form.Input fluid label='Hook Size' type="text" onChange={(e) => setHookSize(e.target.value)} value={hookSize} />
            <Form.Input fluid label='Yarn Info' type="text" onChange={(e) => setYarnInfo(e.target.value)} value={yarnInfo} />
        </Form.Group>
        <Form.TextArea 
            label='About' 
            placeholder='Anything else you want to add?' 
            onChange={(e) => setDescription(e.target.value)} 
            value={description} 
        />

            <div className="form-buttons">
                {/* <Button basic color='green'><Link style={{"color": "white"}} to='/'> Cancel </Link></Button>
                <Button type="submit" basic color='blue'>Submit</Button> */}
                <Button className="green"><Link style={{"color": "white"}} to='/'> Cancel </Link></Button>
                <Button className="yellow" style={{ "marginTop": "10px" }}>Submit</Button>
            </div>
        </Form>

    )
}

// backup
// import React, { useState } from 'react'
// import axios from 'axios';
// import {navigate, Link} from '@reach/router'

//     // eslint-disable-next-line
// export default () => {
//     //keep track of what is being typed via useState hook
//     const [name, setName] = useState(""); 
//     const [errors, setErrors] = useState([]);
//     //handler when the form is submitted
//     const onSubmitHandler = e => {
//         //prevent default behavior of the submit
//         e.preventDefault();
//         //make a post request to create a new person
//         axios.post('http://localhost:8001/api/authors/new', {name})
//             .then(res=> {
//                 console.log(res)
//                 navigate("/")
//             })
//             .catch(err=>{ console.log(err)
//                 const errorResponse = err.response.data.errors; 
//                 const errorArr = []; 
//                 for (const key of Object.keys(errorResponse)) { 
//                     errorArr.push(errorResponse[key].message)
//                 }
//                 setErrors(errorArr);
//             });
//     }

//     return (

//         <form className="formGroup" onSubmit={onSubmitHandler}>

//             {errors.map((err, index) => <p style={{"color": "red"}} key={index}> {err} </p>)}

//             <div className="form-group">
//                 <label HtmlFor="name">Name:</label>
//                 <input type="text" 
//                 onChange={(e) => setName(e.target.value)} 
//                 value={name} 
//                 className="form-control" id="name" placeholder="ex) Ernest Hemingway" />
//             </div>
//             <div>
//                 <button class="btn btn-primary"><Link style={{"color": "white"}} to='/'> Cancel </Link></button>
//                 <button type="submit" class="btn btn-primary">Submit</button>
//             </div>
//         </form>

//     )
// }
