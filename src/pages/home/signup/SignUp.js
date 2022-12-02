import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const SignUp = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const [database, setDatabase] = useState('')
    const {createUser, updateUser} = useContext(AuthContext)
    const nevigate = useNavigate()
    const handleSignIn = (data) => {
        fetch('http://localhost:5000/user', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            toast('Account Succesfully Created')
            const userData = {
                displayName: data.name,
                // userID: data.pageUser
                // photoURL: data.picture 
            }
            updateUser(userData)
            .then((userInfo) => {
                console.log(userInfo)
            })
            .catch(err => console.error(err))
            nevigate('/')
            
        })
        .catch(error => console.log(error))
        setDatabase(data)
    }
    return (
        <div className='flex justify-center m-2'>
            <h1 className="text-5xl font-bold">Create an Account</h1>
            <form className='grid grid-cols-1 gap-2 mt-4 pl-2' onSubmit={handleSubmit(handleSignIn)}>
                <input type="text" {...register('name', {required: 'name  is required'})} placeholder="name" className="input input-bordered w-full max-w-xs" />
                <input type="file" {...register('picture', {required: 'name  is required'})} placeholder="your picture" className="input input-bordered w-full max-w-xs" />
                <input type="email" {...register('email', {required: 'Email Address is required'})} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                {errors.email && <p role="alert">{errors.email?.message}</p>}
                <input type="password" {...register('password', {required: 'password is required',})} placeholder="password" className="input input-bordered w-full max-w-xs" />
                {errors.password && <p role="alert">{errors.password?.message}</p>}
                <p>plese select type of account</p>
                <select type='option' {...register('pageUser', { required: 'option is required' })} placeholder="product-condition" className="input input-bordered w-full max-w-xs">
                    <option value={1}>Seller</option>
                    <option value={2}>Buyer</option>
                </select>
                <input className="btn btn-outline btn-warning w-1/2" type="submit" />
                <p>If You Have Already Account? <Link className='text-secondary font-semibold' to={'/login'}>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;