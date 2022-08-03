import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SyncOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context";

const StripeSuccess = () => {

    const history = useHistory();
    const [state, setState] = useContext(UserContext);

    useEffect(() => {
      const getSubscriptionStatus = async () => {

        const { data } = await axios.get("/subscription-status");
        console.log("SUBSCRIPTION STATUS => ", data);
        if (data && data.length === 0) {
          history.push("/");
        } else {
          // update user in local storage
          const auth = JSON.parse(localStorage.getItem("auth"));
          auth.user = data;
          localStorage.setItem('auth', JSON.stringify(auth))
          // update user in context
          setState(auth);

          // to make sure previous action are being done quickly 
          setTimeout(() => {
            history.push("/account");
          }, 1000)
        }
      };
  
      getSubscriptionStatus();
    }, []);

    return(
        <div className="d-flex justify-content-center fw-bold" 
        style={{ height : "90vh" }}>
            <div className="d-flex align-items-center">
                <SyncOutlined spin style={{ fontSize: "75px" }} />
            </div>
        </div>
    )
}

export default StripeSuccess;