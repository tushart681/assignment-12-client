import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {
    const user = useContext(AuthContext)
    const { data: product = []} = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/product?email=${user?.email}`)
          const data = await res.json();
          return data
        }
      })
    return (
        <div>
            {
                product.map((prod) => <div key={prod} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={prod.product_picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{prod.name}</h2>
                  <p>{prod.product_price}</p>
                  <div className="card-actions">
                    {
                      prod.product_price &&
                      <button className="btn btn-primary">pay</button>

                    }
                    <button className="btn btn-primary">paid</button>
                  </div>
                </div>
              </div>)
                
            }
        </div>
    );
};

export default MyOrders;