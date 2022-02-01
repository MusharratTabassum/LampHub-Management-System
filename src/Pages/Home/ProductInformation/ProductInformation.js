import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth'
import './ProductInformation.css'
import DashBoard from '../../DashBoard/DashBoard';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';



const ProductInformation = () => {

    const { productId } = useParams();
    const [productInformation, setProductInformation] = useState([]);

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch("https://secure-crag-28279.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProductInformation(data));
    }, []);

    const chosenProduct = productInformation.find(item => item._id === productId);

    const onSubmit = data => {
        axios.post('https://secure-crag-28279.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks!The product is booked.We will contact with you shortly.');
                    console.log(res);
                    reset();

                }
            })
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className='container mt-5'>
                <div className='serviceDetail '>
                    <div className='row'>
                        <div className="col-12 col-lg-6" >
                            <img className='img-fluid mb-4' style={{ height: "600px" }} src={chosenProduct?.image} alt="" />
                        </div >
                        <div className="col-12 col-lg-6 text-start p-4" >
                            <h2 className=" mb-3">{chosenProduct?.name}</h2>
                            <h6 className='mt-4 mb-2'>Price : ${chosenProduct?.price}</h6>
                            <h6 className='mt-2 mb-2'>Shipping Cost : {chosenProduct?.shipping}</h6>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input type="text" {...register("user_name", { required: true, maxLength: 20 })} className='input-boxes' placeholder="User Name" defaultValue={user.displayName} />

                                <input type="email" {...register("email", { required: true })} className='input-boxes' placeholder="Email" defaultValue={user.email} />

                                <input type="text" {...register("status", { required: true })} className='input-boxes' defaultValue="pending" />

                                <input type="number" {...register("phone", { required: true })} className='input-boxes' placeholder="your phone number" />

                                <input type="text" {...register("address", { required: true })} className='input-boxes' placeholder="Address" />
                                <input className='booking-btn' type="submit" value="Submit" />

                            </form></div>
                    </div>
                </div>
            </div>
            <Footer></Footer>


        </div>

    );
};

export default ProductInformation;