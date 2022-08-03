import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import PriceCard from '../component/cards/PriceCard';
import { UserContext } from "../context";
import { useHistory } from "react-router-dom";

const Pricing = () => {

    const [state, setState] = useContext(UserContext);
    const [prices, setPrices] = useState([]);
    const [userSubscriptions, setUserSubscriptions] = useState([]);

    useEffect(() => {
        fetchPrices();
    }, []);

    useEffect(() => {
        let result = [];
        const check = () => 
        state && state.user && state.user.subscriptions && state.user.subscriptions.map((sub) => {
            result.push(sub.plan.id);
        });

        check();
        setUserSubscriptions(result);
    }, [state && state.user]);

    const fetchPrices = async () => {
        const {data} = await axios.get("/prices");
        console.log("prices get requests");
        setPrices(data);
    };

    const history = useHistory();

    const handleClick = async(e, price) => {
        e.preventDefault();
        //console.log("plan clicked", price.id);
        if(userSubscriptions && userSubscriptions.includes(price.id)){
            history.push(`/${price.nickname.toLowerCase()}`);
            return;
        }

        if(state && state.token){
            const {data} = await axios.post('/create-subscription', {
                priceId: price.id,
            });
            window.open(data);
        } else{
            //console.log("not going through");
            history.push('/register');
        }
    };

    return (
        <>
        <div className="container-fuild" id="all_page">
            <div className="row col-md-6 offset-md-3 text-center">
                <h1 className="pt-5 fw-bold">Explore the right plan for your business.</h1>
                    <p className="lead pb-4">
                        Choose the plan that suits you best!
                    </p>
            </div>

            <div className='row pt-5 mb-3 text-center'>
                {prices && prices.map((price) => 
                <PriceCard 
                key={price.id} 
                price={price} 
                handleSubscription={handleClick}
                userSubscriptions={userSubscriptions} />
                )}
            </div>
        </div>

        </>
    )
}

export default Pricing;