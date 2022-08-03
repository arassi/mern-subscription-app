import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const register = async (req, res) => {
    try{
        // validation
        const { name, email, password } = req.body;
        if(!name){
            return res.json({
                error: "Name is required"
            });
        }
        if(!password || password.length < 6){
            return res.json({
                error: "Password is required and should be 6 characters long"
            });
        }

        const exist = await User.findOne({ email });

        if(exist){
            return res.json({
                error: "An account with the same email already exists."
            });
        }

        // hashing password
        const hashedPassword = await hashPassword(password);

        // create account in stripe
        const customer = await stripe.customer.create({
            email,
        });

        console.log("stripe customer created on signup: ", customer)

        try{
            const user = await new User({
                name,
                email,
                password: hashedPassword,
                stripe_customer_id: customer.id,
            }).save();

        // create signed token
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '2d'
        });

         const { password, ...rest } = user._doc;
            return res.json({
                token,
                user: rest,
        });

        } catch(err){
            console.log(err);
        }

    } catch(err) {
        console.log(err);
    }
};

export const login = async(req, res) => {
    try{

        // check if user exists
        const user = await User.findOne({ email: req.body.email });
        if(!user){
            return res.json({
                error: "No user found"
            });
        }

        // check password authencity
        const match = await comparePassword(req.body.password, user.password);
        if(req.body.password == ""){
            return res.json({
                error: "You need to enter a password!",
            });
        }
        else if(!match){
            return res.json({
                error: "Wrong password",
            });
        }

        // create signed token
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '2d'
        });

        const {password, ...rest} = user._doc;

        res.json({
            token,
            user: rest
        });

    } catch(err){
        console.log(err);
    }
}