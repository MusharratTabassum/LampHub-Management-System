import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://secure-crag-28279.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete your Product?');
        if (proceed) {
            const url = `https://secure-crag-28279.herokuapp.com/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('The products is deleted successfully!');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts)
                    }
                });
        }
        else {
            alert("The product is not removed.")
        }
    }

    return (
        <div>
            <div className="bookings container ">

                {
                    <div className="table-responsive mt-3 mb-5">
                        <h1 className="mt-5 mb-5 service-title">Total Products : {products?.length}</h1>

                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ProductID</th>
                                    <th>Product Name</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            {products?.map((product, index) => (
                                <tbody key={product._id}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{product._id}</td>
                                        <td>{product.name}</td>
                                        <Button
                                            onClick={() => handleDeleteProduct(product._id)}
                                            style={{ backgroundColor: 'black', color: 'white' }}
                                        >
                                            Delete
                                        </Button>
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

export default ManageProducts;