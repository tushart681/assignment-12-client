import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
  const id = 1;
  const { data: user = [], refetch} = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/user')
      const data = await res.json();
      return data
    }
  })
  const handleButton = user => {
    const Agree = window.confirm(`are you sure:${user.name}`)
    if(Agree){
      fetch(`http://localhost:5000/user/${user._id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => console.log(data))
      refetch()
    }
  }
  const seller = user.filter(prod => prod.pageUser == id)
    return (
       <div>
        {
          seller.map((user) => <div key={user} className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>location</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <button onClick={()=>handleButton(user)}>Delete</button>
              </tr>
            </tbody>
          </table>
        </div>)
        }
       </div> 
    );
};

export default AllSellers;