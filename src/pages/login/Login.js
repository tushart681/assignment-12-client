import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [logerror, setLogerror] = useState(null)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState('');
    const location = useLocation();
    const nevigate = useNavigate();
    const from = location.state?.form?.pathname || '/'
    const handleData = data => {
        setLogerror(null)
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            nevigate(from, {replace: true})
            setData(data.email)
        })
        .catch(error => setLogerror('firebase authentication error'))
    }
    return (
        <div className='flex justify-center m-2'>
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form className='grid grid-cols-1 gap-2 mt-4 pl-2' onSubmit={handleSubmit(handleData)}>
                <input type="email" {...register('email', {required: 'Email Address is required'})} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                {errors.email && <p role="alert">{errors.email?.message}</p>}
                <input type="password" {...register('password', {required: 'password  is required'})} placeholder="password" className="input input-bordered w-full max-w-xs" />
                {errors.password && <p role="alert">{errors.password?.message}</p>}
                <input className="btn btn-outline btn-warning w-1/2" type="submit" />
                {logerror && <p>{logerror}</p> }
                <p>If You Have Not Account? <Link className='text-secondary font-semibold' to={'/signup'}>Create new</Link></p>
                <button className="btn btn-outline btn-warning w-1/2">Login With Google</button>
            </form>
        </div>
    );
};

export default Login;