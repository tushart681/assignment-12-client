import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const user = useContext(AuthContext)
    const { data: product = [], refetch} = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async () => {
          const res = await fetch(`https://y-seven-gilt.vercel.app/product?email=${user?.email}`)
          const data = await res.json();
          return data
        }
      })
      const handleDelete = user => {
        const Agree =window.confirm(`are you sure:${user.name}`)
    if(Agree){
      fetch(`https://y-seven-gilt.vercel.app/product/${user._id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => console.log(data))
      refetch()
    }
  }
    return (
        <div>
            <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Picture</th>
              </tr>
            </thead>
            {
                product.map((prod) => <div key={prod}>
                    <tbody>
                <tr>
                  <th>1</th>
                  <td>{prod.name}</td>
                  <td>{prod.product_price}</td>
                  <button onClick={() => handleDelete(user)}>Delete</button>
                </tr>
              </tbody>
                </div> )
            }
          </table>
        </div>
    );
};

export default MyProducts;