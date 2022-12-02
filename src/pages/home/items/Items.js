import React from 'react';
import img1 from '../../../images/truck-runs-highway-with-speed-3d-rendering-illustration_37416-545.webp'
import img2 from '../../../images/images.jpg'
import img3 from '../../../images/istockphoto-495605964-612x612.jpg'
import Card from './Card';
const products = [
    {
        _id: 1,
        name: 'Truck',
        image: img1
    },
    {
        _id: 2,
        name: 'Mickro',
        image: img2
    },
    {
        _id: 3,
        name: 'Private Car',
        image: img3
    }
]

const Items = () => {
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
                products.map(data => <Card key={data._id} data={data}></Card>)
            }
        </div>
        </section>
    );
};

export default Items;