import Lottie from 'lottie-react';
import React, { use } from 'react';
import signIn from '../../assets/lottie/Login and Sign up.json'
import { AuthContext } from '../../context/authContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';

const SignIn = () => {
    const {signInUser} = use(AuthContext);
    const handleSignIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // sign in user
        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            
        })
        .catch(error =>{
            console.log(error.message);
            
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{width:'300px'}} animationData={signIn} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign In!</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">SignIn</button>
                            </fieldset>
                        </form>
                        <div className='text-center'>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;