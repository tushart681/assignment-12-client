import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import BookModal from './BookModal';

const Category = () => {
    const {id} = useParams()
    const {user} = useContext(AuthContext)
    const {data:product = []} = useQuery({
        queryKey: ['product'],
        queryFn: async() => {
            const res = await fetch(`https://y-seven-gilt.vercel.app/product`)
            const data =await res.json()
            return data
        }
    })
    const [PageUser, setPageUser] = useState({})
   useEffect(() => {
    fetch(`https://y-seven-gilt.vercel.app/user?email=${user?.email}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setPageUser(data)
  })
  },[user?.email])
  const productId = product.filter(prod => prod.Category_id == id)
  console.log(PageUser[0])
    return (
        <div className='grid lg:grid-cols-2'>
            {
                productId.map((product, i) => <div key={i} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={product.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">name: {product.date}</h2>
                  <h2 className="card-title">name: {product.name}</h2>
                  <h2 className="card-title">Location: {product.location}</h2>
                  <h2 className="card-title">resale_price: ${product.resale_price}</h2>
                  <h2 className="card-title">orginal_price: ${product.orginal_price}</h2>
                  <h2 className="card-title">use_time{product.years_of_use}</h2>
                  <p></p>
                  <div className="card-actions">
                    {
                      PageUser[0]?.pageUser === '2' ?
                      <>
                      <label htmlFor="Book-Modal" className="btn btn-primary">Book Now</label>
                      </>
                      :
                      PageUser[0]?.pageUser === '1' &&
                      <>
                      <button className="btn btn-primary">Details</button>
                      {/* <Link to={{
                        pathname: "/details",
                        state: {product} 
                      }}></Link> */}
                      </>
                    }
                  </div>
                </div>
              </div>)
            },
            {
              
              productId.map(data => <BookModal key={data._id} data={data}></BookModal>)
            }
        </div>
    );
};

export default Category;