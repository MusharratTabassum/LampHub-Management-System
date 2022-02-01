import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import DashBoard from '../DashBoard/DashBoard';
import Footer from '../Shared/Footer/Footer';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onAddSubmit = data => {
        console.log(data);
        axios.post('https://secure-crag-28279.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thank you for reviewing us!');
                    reset();
                }
            })
    }
    return (
        <div>
            <DashBoard></DashBoard>
            <div className="mt-5">
                <h2>Give Us your valuable review</h2>

                <form onSubmit={handleSubmit(onAddSubmit)}>
                    <input {...register("user_name", { required: true, maxLength: 200 })} placeholder="your name" className='inputField' defaultValue={user.displayName} />
                    <br />
                    <input {...register("review_us", { required: true, maxLength: 200 })} placeholder="your review" className='inputField' />
                    <br />
                    <input type="number" {...register("ratings")} placeholder="ratings" className='inputField' />
                    <br />

                    <input className='add-btn' type="submit" />
                </form>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AddReview;