import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect,  } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookModal = ({ data }) => {
  const { name, Category_id, image, location, orginal_price, resale_price, years_of_use, _id } = data
  const { user } = useContext(AuthContext)
  // const {register,formState: { errors }, handleSubmit} = useForm()
  console.log(user)
  const handleData = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.user_name.value;
    const email = form.user_email.value;
    const product = form.product_name.value;
    const price = form.resale_price.value;
    const phone = form.phone_number.value;
    const location = form.your_location.value;
    const booking = {
      name,
      email,
      product,
      price,
      phone,
      location,
      product_id: _id
    }
    console.log(booking)
    fetch('http://localhost:5000/booked', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    if (data.acknowledged) {
      toast('your product will be addeded')
    }
  }

  return (
    <>
      <input type="checkbox" id="Book-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="Book-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleData} className='grid grid-cols-1 gap-3 mt-10'>
            <input type="text" name='user_name' disabled value={user?.displayName} className="input w-1/2 input-bordered " />
            <input type="text" name='user_name' disabled value={user?.userID} className="input w-1/2 input-bordered " />
            <input type="text" name='user_email' disabled value={user?.email} className="input w-1/2 input-bordered " />
            <input type="text" name='product_name' disabled value={name} className="input w-1/2 input-bordered " />
            <input type="text" name='product_location' disabled value={location} className="input w-1/2 input-bordered " />
            <input type="text" name='resale_price' disabled value={resale_price} className="input w-1/2 input-bordered " />
            <input type="number" name='phone_number' placeholder="phone-number" className="input w-1/2 input-bordered " />
            <input type="text" name='your_location' placeholder="your-location" className="input w-1/2 input-bordered " />
            <input className='btn btn-accent w-full' type="submit" value="order" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookModal;