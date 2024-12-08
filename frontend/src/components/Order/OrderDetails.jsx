import React from 'react';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearErrors, getOrderDetails } from '../../actions/orderAction';
import Loader from '../Layouts/Loader';
import TrackStepper from './TrackStepper';
import MetaData from '../Layouts/MetaData';

const OrderDetails = () => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const params = useParams();
    const { order, error, loading } = useSelector((state) => state.orderDetails);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        dispatch(getOrderDetails(params.id));
    }, [dispatch, error, params.id, enqueueSnackbar]);

    return (
        <>
            <MetaData title="Order Details | Siddhi Creatives" />
            <main className="w-full mt-14 sm:mt-16">
                {loading ? <Loader /> : (
                    <>
                        {order && order.user && order.shippingInfo && (
                            <div className="flex flex-col gap-4 max-w-6xl mx-auto">
                                {/* Delivery Address Card */}
                                <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
                                    <h3 className="font-medium text-lg">Delivery Address</h3>
                                    <h4 className="font-semibold">{order.user.name}</h4>
                                    <p className="text-sm">{`${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state} - ${order.shippingInfo.pincode}`}</p>
                                    <div className="flex gap-2 text-sm">
                                        <span className="font-medium">Email:</span>
                                        <span>{order.user.email}</span>
                                    </div>
                                    <div className="flex gap-2 text-sm">
                                        <span className="font-medium">Phone Number:</span>
                                        <span>{order.shippingInfo.phoneNo}</span>
                                    </div>
                                </div>

                                {/* Order Items Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {order.orderItems.map((item) => {
                                        const { _id, image, name, price, quantity } = item;

                                        return (
                                            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col" key={_id}>
                                                <img draggable="false" className="h-32 w-full object-contain mb-2" src={image} alt={name} />
                                                <p className="text-sm font-semibold">{name.length > 60 ? `${name.substring(0, 60)}...` : name}</p>
                                                <p className="text-xs text-gray-600">Quantity: {quantity}</p>
                                                <p className="text-xs text-gray-600">Price: ₹{price.toLocaleString()}</p>
                                                <span className="font-medium">Total: ₹{(quantity * price).toLocaleString()}</span>

                                                {/* Order Status Section */}
                                                <h3 className="font-medium mt-4">Order Status</h3>
                                                <TrackStepper
                                                    orderOn={order.createdAt}
                                                    shippedAt={order.shippedAt}
                                                    deliveredAt={order.deliveredAt}
                                                    activeStep={
                                                        order.orderStatus === "Delivered" ? 2 : order.orderStatus === "Shipped" ? 1 : 0
                                                    }
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </main>
        </>
    );
};

export default OrderDetails;