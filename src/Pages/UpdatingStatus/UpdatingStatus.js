import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DashBoard from '../DashBoard/DashBoard';
import Footer from '../Shared/Footer/Footer';

const UpdatingStatus = () => {
    const [booking, setBooking] = useState({});
    const { id } = useParams();


    useEffect(() => {
        const url = `https://secure-crag-28279.herokuapp.com/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, []);

    // Update User
    const handleStatusChange = e => {
        const updatedStatus = e.target.value;
        const updatedBooking = { status: updatedStatus };
        setBooking(updatedBooking);
    }


    const handleUpdateStatus = (e) => {

        const url = `https://secure-crag-28279.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setBooking({});
                    e.target.reset();
                }
            })
        e.preventDefault();


    }
    return (
        <div>
            <DashBoard></DashBoard>
            <div className='p-5 m-3'>
                <h2 className='mb-4'>Update the booking status</h2>
                <form onSubmit={handleUpdateStatus}>
                    <input style={{ padding: "4px" }} type="text" onChange={handleStatusChange} value={booking.status || ''} />
                    <input className='btn' type="submit" value="Update" style={{ backgroundColor: 'black', color: "white", padding: "3px" }} />

                </form>

            </div>
            <Footer></Footer>

        </div>
    );
};

export default UpdatingStatus;