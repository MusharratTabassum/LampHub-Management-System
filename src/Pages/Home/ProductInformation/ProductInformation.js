import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';


const ProductInformation = () => {
    const { productId } = useParams();
    const [productInformation, setProductInformation] = useState([]);


    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch("https://murmuring-beyond-96223.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setProductInformation(data));
    }, []);

    const chosenProduct = productInformation.find(item => item._id === productId);

    const onSubmit = data => {
        axios.post('https://murmuring-beyond-96223.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks! We will contact with you soon.');
                    console.log(res);
                    reset();

                }
            })
    }
    return (
        <div>
            <div className='container '>
                <div className='serviceDetail '>
                    <div className='row'>
                        <div className="col-12 col-lg-6" data-aos="flip-left" >
                            <img className='img-fluid img-size  mb-4' src={chosenProduct?.image} alt="" />
                        </div >
                        <div className="col-12 col-lg-6 notice text-start p-4" data-aos="flip-right">
                            <h2 className=" mb-3">{chosenProduct?.name}</h2>
                            <h6 className='mt-4 white mb-2'>Duration : {chosenProduct?.price}</h6>

                        </div>
                    </div>
                </div>
                <div className='booking-detail'>
                    <h2 className="mb-3">Book The Tour</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text"  {...register("name", { required: true })} placeholder="product name" defaultValue={chosenProduct?.name} />
                        <input type="text" {...register("user_name", { required: true, maxLength: 20 })} placeholder="User Name" defaultValue={user.displayName} />
                        <input type="email" {...register("email", { required: true })} placeholder="Email" defaultValue={user.email} />
                        <input type="text" {...register("status", { required: true })} defaultValue="pending" />
                        <input type="number" {...register("phone", { required: true })} placeholder="01*******" />
                        <input type="text" {...register("address", { required: true })} placeholder="Address" />
                        <input type="date" {...register("Date")} placeholder="Date" />
                        <input className='booking-btn' type="submit" value="Book" />
                    </form></div>

            </div>
        </div>

        </div >
    );
};

export default ProductInformation;