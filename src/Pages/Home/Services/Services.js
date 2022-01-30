import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://murmuring-beyond-96223.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div id="tours">
                <h1 className="text-center fw-bold my-5 py-3 service-title">Now Avaiable To Buy Online
                </h1>
                <div className="container" data-aos="zoom-in-up" data-aos-duration="1000">

                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                        {
                            services.slice(0, 6).map(service => (<Service
                                key={service.id}
                                service={service}
                            ></Service>))
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;