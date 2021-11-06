import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import initializeauth from '../../Firebase/firebase.init';

initializeauth();
const auth = getAuth();
const Login = () => {
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIslogin] = useState(false);

    const { googleSignin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const login = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setError('');
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })

    }


    const handlegoogleLogin = () => {
        googleSignin()
            .then((result) => {
                history.push(redirect_uri);
            })
    }


    const handleregistration = e => {
        e.preventDefault();
        console.log(email, pass, name);
        if (pass.length < 6) {
            setError('Password should be atleast 6 Characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
            setError('Password must contain 2 upper case');
            return;
        }
        isLogin ? login(email, pass) : createUser(email, pass);

    }

    const createUser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setError('');
                verifyEmail();
                setuserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setuserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        })
    }


    const handlename = event => {
        setName(event.target.value);
    }

    const handleemail = event => {
        setemail(event.target.value);
    }

    const handlepass = event => {
        setpass(event.target.value);
    }

    const handleToggle = e => {
        setIslogin(e.target.checked);
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            });
    }

    return (
        <div className='login-form mb-5'>
            <div>
                <form onSubmit={handleregistration}>
                    <h3 className='text-primary'>Please {isLogin ? 'Login' : 'Register'}</h3>
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputname" className="col-sm-2 col-form-label pe-2">Name</label>
                        <div className="col-sm-10">
                            <input onBlur={handlename} type="name" className="form-control" id="inputname" required />
                        </div>
                    </div>}
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label pe-2">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleemail} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label pe-4">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlepass} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={handleToggle} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}
                    </div>
                    <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>

                </form>
                <div>-------OR------</div>
                <Button onClick={handlegoogleLogin} className='mt-3' variant="light"><i className="fab fa-google"></i> Continue with Google</Button>
            </div>
        </div>
    );
};

export default Login;