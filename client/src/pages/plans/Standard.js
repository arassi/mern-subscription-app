import React, {Fragment, useEffect, useContext} from "react";
import { UserContext } from "../../context";

const Standard = ({history, match}) => {

    const [state, setState] = useContext(UserContext);

    useEffect(() => {
        let result = [];
        const check = () => 
        state && state.user && state.user.subscriptions && state.user.subscriptions.map((sub) => {
            result.push(sub.plan.nickname);
        });
        check();

        //console.log("MATCH", match);
        const plan = match.path.split('/')[1].toUpperCase(); // basic

        if(!result.includes(plan)){
            history.push("/");
        }

    }, [state && state.user]);

    return (
        <Fragment>
            <div className="container-fluid">

                <div className="row py-5 bg-light text-center">
                    <h1 className="display-4 fw-bold">
                        STANDARD
                    </h1>
                    <p className="lead"> Dashboard: </p>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8 p-5 rounded bg-dark text-light">
                            <ul>
                                <li>Lerm Ipsum Loren......</li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h4>Lerm Ipsum Loren......</h4>
                            <p>
                                Lerm Ipsum Loren......
                            </p>
                            <h4>Email Support</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Standard;