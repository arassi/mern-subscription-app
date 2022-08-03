import React, {useState, useContext} from 'react';
import Input from "../component/Input";
import Button from "../component/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from '../context';


const Register = ({ history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [state, setState] = useContext(UserContext);

    const handleClick = async (e) => {
       // console.log(name, email, password);
       try{
        e.preventDefault(); // to be able to give the endpoint instead of the whole url
        const {data} = await axios.post('http://localhost:8000/api/register', {
            name, 
            email, 
            password
        });
        console.log(data);

        if(data.error){
            toast.error(data.error);
        } else{
            setName("");
            setEmail("");
            setPassword("");
            toast.success(`Hey ${data.user.name}, welcome to NFT Alert!`);

            setState(data);

            localStorage.setItem('auth', JSON.stringify(data));

            // redirect to login page
             history.push("/");
            };
        } catch(err) {
            console.log(err);
            toast.error("Something went wrong. Try again.")
       }
    }

    return (
        <div className="d-flex justify-content-center" style={{height: "80vh"}}>
            <div className="container align-items-center d-flex">
                <div className="row col-md-6 offset-md-3 text-center">
                    <h1 className="pt-5 fw-bold">Let's Get Started</h1>
                    <p className="lead pb-4">
                        Sign-up for free. No Credit Card required.
                    </p>

                    <div className="form-group">
                        <Input label="Name" value={name} setValue={setName}/>
                        <Input label="Email" type="email" value={email} setValue={setEmail}/>
                        <Input label="Password" type="password" value={password} setValue={setPassword}/>

                        <div className="d-grid">
                            <Button handleClick={handleClick} type="info" text="Register" size="sm"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;