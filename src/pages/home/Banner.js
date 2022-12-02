import React from 'react';
import img from '../../images/businessman-exchange-handing-over-car-600w-1572382876.webp'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row w-1/2">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Second Hand Cars</h1>
                        <p className="py-6">There are several renowned brands in Bangladesh like Toyota, Nissan, Honda, Mitsubishi, Hyundai you can choose from. Toyota is the most popular brand but other brands are also getting popular now a days.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;