import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import DashBoard from '../DashBoard/DashBoard';
import Footer from '../Shared/Footer/Footer';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onAddSubmit = data => {
        console.log(data);
        axios.post('https://secure-crag-28279.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('The product is added successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <DashBoard></DashBoard>
            <div className="mt-5">
                <h2>Please Add a Product</h2>

                <form onSubmit={handleSubmit(onAddSubmit)}>
                    <input {...register("name", { required: true, maxLength: 200 })} placeholder="product name" className='inputField' />
                    <br />
                    <input type="number" {...register("price")} placeholder="price" className='inputField' />
                    <br />
                    <input type="text" {...register("shipping")} placeholder="shipping cost" className='inputField' />
                    <br />
                    <input {...register("image")} placeholder="image url" className='inputField' />
                    <br />
                    <input className='add-btn' type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>


    );
};

export default AddProduct;