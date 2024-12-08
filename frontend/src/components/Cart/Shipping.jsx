import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import PriceSidebar from './PriceSidebar';
import Stepper from './Stepper';
import { useSnackbar } from 'notistack';
import { saveShippingInfo } from '../../actions/cartAction';
import { useNavigate } from 'react-router-dom';
import MetaData from '../Layouts/MetaData';
import states from '../../utils/states';

const Shipping = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { cartItems } = useSelector((state) => state.cart);
    const { shippingInfo } = useSelector((state) => state.cart);

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [country] = useState('IN'); // Country is fixed to India
    const [state, setState] = useState(shippingInfo.state);
    const [pincode, setPincode] = useState(shippingInfo.pincode);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    const shippingSubmit = (e) => {
        e.preventDefault();

        if (phoneNo.length !== 10) {
            enqueueSnackbar("Invalid Phone Number", { variant: "error" });
            return;
        }
        dispatch(saveShippingInfo({ address, city, country, state, pincode, phoneNo }));
        navigate("/order/confirm");
    }

    return (
        <>
            <MetaData title="Siddhi Creatives: Shipping Details" />
            <main className="w-full mt-20">

                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 m-auto sm:mt-4 mb-7 overflow-hidden">

                    {/* Cart Column */}
                    <div className="flex-1">
                        <Stepper activeStep={1}>
                            <div className="w-full bg-white shadow-lg rounded-lg p-6">

                                <form onSubmit={shippingSubmit} autoComplete="off" className="flex flex-col justify-start gap-4 w-full">

                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information</h2>

                                    <TextField
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        fullWidth
                                        label="Address"
                                        variant="outlined"
                                        required
                                    />

                                    <div className="flex gap-6">
                                        <TextField
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value)}
                                            type="number"
                                            label="Pincode"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                        <TextField
                                            value={phoneNo}
                                            onChange={(e) => setPhoneNo(e.target.value)}
                                            type="number"
                                            label="Phone No"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                    </div>

                                    <div className="flex gap-6">
                                        <TextField
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            label="City"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                        <TextField
                                            label="Landmark (Optional)"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </div>

                                    <div className="flex gap-6">
                                        <FormControl fullWidth>
                                            <InputLabel id="country-select">Country</InputLabel>
                                            <Select
                                                labelId="country-select"
                                                id="country-select"
                                                value={country}
                                                disabled
                                                label="Country"
                                            >
                                                <MenuItem value={'IN'}>India</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl fullWidth>
                                            <InputLabel id="state-select">State</InputLabel>
                                            <Select
                                                labelId="state-select"
                                                id="state-select"
                                                value={state}
                                                label="State"
                                                onChange={(e) => setState(e.target.value)}
                                                required
                                            >
                                                {states.map((item) => (
                                                    <MenuItem key={item.code} value={item.code}>{item.name}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="bg-primary-orange w-full sm:w-1/3 my-2 py-3 text-sm font-medium text-white shadow hover:shadow-lg rounded-md uppercase transition duration-300 ease-in-out">
                                        Save and Deliver Here
                                    </button>
                                </form>
                            </div>
                        </Stepper>
                    </div>

                    {/* Price Sidebar */}
                    <PriceSidebar cartItems={cartItems} />
                </div>
            </main>
        </>
    );
};

export default Shipping;