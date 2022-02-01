import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DashBoard from '../DashBoard/DashBoard';
import Footer from '../Shared/Footer/Footer';


const AllBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://secure-crag-28279.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return (
        <div>
            <DashBoard></DashBoard>
            <div className="bookings container ">

                {
                    <div className="table-responsive mt-3 mb-5">
                        <h1 className="mt-5 mb-5 service-title">Total Order : {bookings?.length}</h1>

                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>BookingID</th>
                                    <th>Email</th>
                                    <th>Status</th>

                                </tr>
                            </thead>
                            {bookings?.map((booking, index) => (
                                <tbody key={booking._id}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{booking._id}</td>
                                        <td>{booking.email}</td>
                                        <td>{booking.status}</td>
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

export default AllBookings;