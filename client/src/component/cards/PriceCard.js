import React, {useContext} from "react";
import { UserContext  } from "../../context";

const PriceCard = ({ price, handleSubscription, userSubscriptions }) => {

    const [state] = useContext(UserContext);

    const dynamicDescription = () => {
        if(price.nickname === 'BASIC'){
            return "Up to 10 items";
        }
        if(price.nickname === 'STANDARD'){
            return "Up to 25 items";
        }
        if(price.nickname === 'PREMIUM'){
            return "Unlimited Items";
        }
    };

    const buttonStyle = () => {
        return price.nickname === "BASIC" ? 'btn-outline-danger' : "btn-danger";
    };

    const headerStyle = () => {
        return price.nickname === "PREMIUM" ? "bg-danger text-light" : "";
    }

    const borderStyle = () => {
        return price.nickname === "PREMIUM" ? "border-danger" : "";
    }

    const buttonText = () => {
        return state && state.token ? "Buy the plan" : "Sign Up"
    }

    return (
        <div className='col'>
            <div className={`card mb-4 rounded-3 shadow-sm ${borderStyle()}`}>
                <div className={`card-header py-3 ${headerStyle()}`}>
                    <h4 className="my-0 fw-normal">{price.nickname}</h4>
                </div>

                <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                        {(price.unit_amount / 100).toLocaleString("en-US", {
                            style: 'currency',
                            currency: "USD",
                        })}{" "}
                        <small className='text-muted fw-light'>/mo</small>
                    </h1>
                    <ul className='list-unstyled mb-3 mb-4'>
                        <li className="fw-bold">{dynamicDescription(price)}</li>
                        <li>"Any perk"</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                    </ul>

                    <button 
                    onClick={(e) => handleSubscription(e, price)} 
                    className={`w-100 btn btn-lg ${buttonStyle()}`}>
                        {userSubscriptions && userSubscriptions.includes(price.id) ? 'Access plan' : buttonText()}
                   </button>

                </div>
            </div>
        </div>
    )
}

export default PriceCard;