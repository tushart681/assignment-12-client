import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
  const id = 2;
  const { data: user = [], refetch} = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch('https://y-seven-gilt.vercel.app/user')
      const data = await res.json();
      return data
    }
  })

  const handleDelete = user => {
    const Agree =window.confirm(`are you sure:${user.name}`)
    if(Agree){
      fetch(`https://y-seven-gilt.vercel.app/user/${user._id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => console.log(data))
      refetch();
    }
  }
  const buyers = user.filter(prod => prod.pageUser == id)
  return (
    <div className='grid lg:grid-cols-2'>
      {
        buyers.map((user) => <div key={user} className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <button onClick={() => handleDelete(user)}>Delete</button>
              </tr>
            </tbody>
          </table>
        </div>)
      }
    </div>
  );
};

export default AllBuyers;