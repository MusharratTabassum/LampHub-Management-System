import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onAddSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('The product is added successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <div className="mt-5">
                <h2>Please Add a Product</h2>
                <form onSubmit={handleSubmit(onAddSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="product name" className='inputField' />
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

        </div>
    );
};

export default AddProduct;