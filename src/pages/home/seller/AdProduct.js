import { format, set } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AdProduct = ({ selectedDate }) => {
    const date = format(selectedDate, 'Pp')
    const postDate = date;
    const { user } = useContext(AuthContext)
    const { register, formState: { errors },  handleSubmit } = useForm()
    const imageHost = process.env.REACT_APP_imagebb_key
    const [database, setDatabase] = useState('')
    const navigate = useNavigate()
    const handleData = data => {
        setDatabase(data)
        fetch('https://y-seven-gilt.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        const image = data.image[0];
        const newData = new FormData();
        newData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHost}`
        fetch(url, {
            method: 'POST',
            body: newData
        })
        .then(res => res.json())
        .then(img => {
            if(img.success){
                const imgData = {
                    image: img.data.url
                }
                fetch('https://y-seven-gilt.vercel.app/product',{
                    method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(imgData)
                })
                .then(res => res.json())
                .then(data => console.log(data))
                if (data.acknowledged) {
                    toast('your product will be addeded')
                    navigate('/')
                }
            }
        })
    }

    console.log(database)

    return (
        <div className='flex justify-center m-2'>
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form className='grid grid-cols-1 gap-2 mt-4 pl-2' onSubmit={handleSubmit(handleData)}>
                <input type="text" value={postDate} {...register('date', { required: 'Email Address is required' })} placeholder="product-name" className="input input-bordered w-full max-w-xs" />
                <input type="text" {...register('Product_name', { required: 'Email Address is required' })} placeholder="product-name" className="input input-bordered w-full max-w-xs" />
                <input type="text" value={user?.email} {...register('email', { required: 'Email Address is required' })} placeholder="product-name" className="input input-bordered w-full max-w-xs" />
                <input type="number" {...register('product_price', { required: 'Email Address is required' })} placeholder="price" className="input input-bordered w-full max-w-xs" />
                <input type="file" {...register('image', { required: 'Email Address is required' })} placeholder="picture" className="input input-bordered w-full max-w-xs" />
                <select type='option' {...register('Condition', { required: 'Email Address is required' })} placeholder="product-condition" className="input input-bordered w-full max-w-xs">
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                </select>
                <input type="number" {...register('mobile_number', { required: 'Email Address is required' })} placeholder="Mobile Number" className="input input-bordered w-full max-w-xs" />
                <select type='option' {...register('location', { required: 'Email Address is required' })} placeholder="Select Location" className="input input-bordered w-full max-w-xs">
                    <option value="chittagong">Chittagong</option>
                    <option value="khulna">Khulna</option>
                    <option value="rajshahi">Rajshahi</option>
                    <option value="josor">Joshor</option>
                    <option value="barishal">Barishal</option>
                </select>
                <select type='option' {...register('Category_id', { required: 'Email Address is required' })} placeholder="Product Category" className="input input-bordered w-full max-w-xs">
                    <option value={1}>Truck</option>
                    <option value={2}>Micro Bus</option>
                    <option value={3}>Private Car</option>
                </select>
                <input type="text" {...register('description', { required: 'Email Address is required' })} placeholder="description" className="input input-bordered w-full max-w-xs" />
                <input type="number" {...register('purchase_price', { required: 'Email Address is required' })} placeholder="purchase" className="input input-bordered w-full max-w-xs" />
                <input type="number" {...register('Year_of_purchase', { required: 'Email Address is required' })} placeholder="Year of purchase" className="input input-bordered w-full max-w-xs" />
                <input type="text" {...register('others_information', { required: 'Email Address is required' })} placeholder="product information" className="input input-bordered w-full max-w-xs" />
                <input className="btn btn-outline btn-warning w-1/2" type="submit" />
            </form>
        </div>
    );
};

export default AdProduct;