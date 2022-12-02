import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyBuyers = () => {
    const user = useContext(AuthContext)
    const { data: booking = [], refetch} = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
          const data = await res.json();
          return data
        }
      })
    return (
        <div>
            <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
              </tr>
            </thead>
            {
                booking.map((prod) => <div key={prod}>
                    <tbody>
                <tr>
                  <th>1</th>
                  <td>{prod.name}</td>
                  <td>{prod.email}</td>
                  <td>{prod.phone}</td>
                  <td>{prod.location}</td>
                </tr>
              </tbody>
                </div> )
            }
          </table>
        </div>
    );
};

export default MyBuyers;