import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Table } from 'react-bootstrap';
import DashBoard from '../DashBoard/DashBoard';
import Footer from '../Shared/Footer/Footer';


const MyOrders = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://secure-crag-28279.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])


    //filter
    const myBookings = bookings.filter(booking => booking.email == user.email);


    console.log(myBookings);

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete your booking?');
        if (proceed) {
            const url = `https://secure-crag-28279.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('The booking is deleted successfully!');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings)
                    }
                });
        }
        else {
            alert("not working")
        }
    }


    return (
        <div>
            <DashBoard></DashBoard>
            <div className="bookings container">

                <h1 className='mb-1 mt-4'>My Total Booking : {myBookings?.length}</h1>

                {
                    <div className="table-responsive mt-5 mb-5">

                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>BookingID</th>

                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Delete/Update</th>
                                </tr>
                            </thead>
                            {myBookings?.map((booking, index) => (
                                <tbody key={booking._id}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{booking._id}</td>
                                        <td>{booking.email}</td>

                                        <td>{booking.status}</td>
                                        <button style={{ backgroundColor: "black", color: "white", padding: "6px" }} onClick={() => handleDeleteBooking(booking._id)}>Cancel</button>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>
                }

            </div>
            <Footer></Footer>
        </div>

    );
};

export default MyOrders;