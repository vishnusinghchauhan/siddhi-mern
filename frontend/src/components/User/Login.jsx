import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loginUser } from '../../actions/userAction';
import { useSnackbar } from 'notistack';
import BackdropLoader from '../Layouts/BackdropLoader';
import MetaData from '../Layouts/MetaData';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const location = useLocation();

    const { loading, isAuthenticated, error } = useSelector((state) => state.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    }

    const redirect = location.search ? location.search.split("=")[1] : "account";

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            navigate(`/${redirect}`);
        }
    }, [dispatch, error, isAuthenticated, redirect, navigate, enqueueSnackbar]);

    return (
        <>
            <MetaData title="Login | Siddhi Creatives" />

            {loading && <BackdropLoader />}
            <main className="flex flex-col items-center w-full mt-12 sm:pt-20 sm:mt-0">
                <div className="flex sm:w-4/6 w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Sidebar Column */}
                    <div className="loginSidebar bg-primary-blue p-10 pr-12 hidden sm:flex flex-col gap-4 w-2/5">
                        <h1 className="font-bold text-white text-4xl">Siddhi Creatives</h1>
                        <p className="text-gray-200 text-lg">Access your Orders, Wishlist and Recommendations easily.</p>
                    </div>

                    {/* Login Column */}
                    <div className="flex-1 p-8">
                        <h2 className="text-center text-2xl font-semibold mb-6">Login to Your Account</h2>
                        <form onSubmit={handleLogin} className="flex flex-col gap-4">
                            <TextField
                                fullWidth
                                id="email"
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <div className="flex flex-col gap-2 mt-4 mb-6">
                                <p className="text-xs text-primary-grey text-left">
                                    By continuing, you agree to Siddhi Creatives's 
                                    <Link to="/terms" className="text-primary-blue"> Terms of Use</Link> and 
                                    <Link to="/privacy" className="text-primary-blue"> Privacy Policy.</Link>
                                </p>
                                <button type="submit" className="bg-primary-orange text-white py-3 rounded-lg shadow hover:bg-orange-600 transition duration-300 ease-in-out">
                                    Login
                                </button>
                                <Link to="/password/forgot" className="text-primary-blue text-center py-3 border rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out">
                                    Forgot Password?
                                </Link>
                            </div>
                        </form>
                        <Link to="/register" className="font-medium text-sm text-primary-blue text-center mt-4">New to Siddhi Creatives? Create an account</Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Login;