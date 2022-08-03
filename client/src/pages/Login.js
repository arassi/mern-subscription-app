import React, {useContext, useState} from 'react';
import Input from "../component/Input";
import Button from "../component/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from '../context';

const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // User context
    const [state, setState] = useContext(UserContext);

    const handleClick = async (e) => {
        //console.log(email, password);
        try {
            e.preventDefault();
            const { data } = await axios.post("/login", {
              email,
              password,
            });
            console.log(data);
      
            if (data.error) {
              toast.error(data.error);
            } else {
              setEmail("");
              setPassword("");
              setState(data);
              localStorage.setItem("auth", JSON.stringify(data));
              history.push("/account");
            }
            
          } catch (err) {
            console.log(err);
            toast.error("Something went wrong. Try again");
          }
        };

    return (
        <div className="d-flex justify-content-center" style={{height: "80vh"}}>
            <div className="container align-items-center d-flex">
                <div className="row col-md-6 offset-md-3 text-center">
                    <h1 className="pt-5 fw-bold">Login</h1>
                    <p className="lead pb-4">
                        Enter your account details below
                    </p>

                    <div className="form-group">
                        <Input label="Email" type="email" value={email} setValue={setEmail}/>
                        <Input label="Password" type="password" value={password} setValue={setPassword}/>

                        <div className="d-grid">
                            <Button handleClick={handleClick} type="success" text="Sign in" size="sm"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;