import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://secure-crag-28279.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete your booking?');
        if (proceed) {
            const url = `https://secure-crag-28279.herokuapp.com/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('The products booking is deleted successfully!');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings)
                    }
                });
        }
        else {
            alert("The booking is not removed.")
        }
    }

    return (
        <div>
            <div className="bookings container ">

                {
                    <div className="table-responsive mt-3 mb-5">
                        <h1 className="mt-5 mb-5 service-title">Total Booking : {bookings?.length}</h1>

                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>BookingID</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th><th>Delete/Update</th></th>
                                </tr>
                            </thead>
                            {bookings?.map((booking, index) => (
                                <tbody key={booking._id}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{booking._id}</td>
                                        <td>{booking.email}</td>
                                        <td>{booking.status}</td>
                                        <Button
                                            onClick={() => handleDeleteBooking(booking._id)}
                                        >
                                            Delete
                                        </Button>
                                        <Link to={`/bookings/update/${booking._id}`}><button className='update-btn'>Update</button></Link>

                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>

                }

            </div>

        </div>
    );
};

export default ManageBookings;