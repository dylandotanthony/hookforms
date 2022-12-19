import React, { useState } from  'react';
import { Form, Col, Row, Stack, Container }  from 'react-bootstrap';
    
const UserForm = ({addToList}) => {

    const initialFormData = {
        id:1,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confPassword: ""
    };
    const [list, setList] = useState([]);
    const [user, setUser] = useState(initialFormData);
    const [errors, setErrors] = useState([]);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // const [firstName, setfirstName] = useState("");
    // const [lastName, setlastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");  
    // const [confPassword, setconfPassword] = useState("");
    // const [firstNameError, setfirstNameError] = useState("");
    // const [lastNameError, setlastNamErrore] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [passwordError, setPasswordError] = useState("");  
    // const [confPasswordError, setconfPasswordError] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const errorList = [];
        if (user.firstName.length < 2){
            errorList.push("First Name must be AT LEAST 2 Letters");

        }
        if (user.lastName.length < 2){
            errorList.push("Last Name must be AT LEAST 2 Letters");

        }
        if (user.email.length < 5){
            errorList.push(" Email must be AT LEAST 5 Letters");

        }
        if (user.password.length < 8){
            errorList.push("Password must be AT LEAST 8 Letters");

        }
        if (user.password !== user.confPassword){
            errorList.push("Passwords Must Match!");

        }
        if (errorList.length > 0){
            setErrors(errorList);
        } else{
            setUser(initialFormData);
            setErrors([]);
            console.log(user)
        }

    };
    

    const onChangeHandler = (e) => {
        let increment = list[0] ? list[list.length -1].id +1 :1;
        setUser({
            ...user, 
            id: increment,
            [e.target.name]: e.target.value
        });
    };



    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return " Welcome, please submit the form";
        }
    };

    
    return(
        <Container className="container-sm">
            <Form className="col-md-5 mx-auto m-5" onSubmit={ onSubmitHandler }>
            {errors.map((err, i) => (
                        <p className="text-danger" key={i}>
                            {err}
                        </p>
                    ))}
                <h3>{ formMessage() }</h3>
                <Stack gap={3}>
                    <Form.Group as={Row} controlId="ControlInput1">
                        <Form.Label  column sm="4" > First Name: </Form.Label>
                        <Col sm="8">
                            <Form.Control 
                            name="firstName"
                            type="text" 
                            onChange={ onChangeHandler } 
                            value={ user.firstName } 
                            placeholder="First Name...."/>
                        </Col>
                    </Form.Group>
                </Stack>
                <Stack gap={2}>
                    <Form.Group as={Row} controlId="ControlInput2">
                        <Form.Label column sm="4"> Last Name: </Form.Label>
                        <Col sm="8">
                            <Form.Control 
                            name="lastName"
                            type="text" 
                            onChange={ onChangeHandler }  
                            value={ user.lastName } 
                            placeholder="Last Name...."/>
                        </Col>
                    </Form.Group>

                </Stack>
                <Stack gap={2}>
                    <Form.Group  as={Row} controlId="ControlInput3">
                        <Form.Label column sm="4">  Email: </Form.Label>
                        <Col sm="8">
                            <Form.Control 
                            name="email"
                            type="text" 
                            onChange={ onChangeHandler }  
                            value={ user.email } 
                            placeholder="Email...."/>
                        </Col>
                    </Form.Group>
                    
                </Stack>
                <Stack gap={2}>
                    <Form.Group as={Row} controlId="ControlInput4">
                        <Form.Label column sm="4"> Password: </Form.Label>
                        <Col sm="8">
                            <Form.Control 
                            name="password"
                            type="password" 
                            onChange={ onChangeHandler }  
                            value={ user.password } 
                            placeholder="Password...."/>
                        </Col>
                    </Form.Group>
                    
                </Stack>
                <Stack gap={3}>
                    <Form.Group as={Row} controlId="ControlInput5">
                        <Form.Label column sm="4"> Confirm Password: </Form.Label>
                        <Col sm="8">
                            <Form.Control 
                            name="confPassword"
                            type="password" 
                            onChange={ onChangeHandler } 
                            value={ user.confPassword } 
                            placeholder="Confirm Password...."/>
                        </Col>
                    </Form.Group>

                    <input type="submit" value="Create User" />
                </Stack>
            </Form>
        </Container>



    );
};


export default UserForm;
