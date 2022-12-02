import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navber = () => {
  const {user, logOut, loginProvider} = useContext(AuthContext)
  const [Pageuser, setPageUser] = useState({})
  const location = useLocation()
  const googleProvieder = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    loginProvider(googleProvieder)
    .then(result => {
        const user = result.user;
        fetch('https://y-seven-gilt.vercel.app/user', {
              method:'POST',
              headers:{
                  'content-type':'application/json'
              },
              body: JSON.stringify(googleProvieder)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              location('/')
          })
    })
    .catch(error => console.error(error))
}
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }
  useEffect(() => {
    fetch('https://y-seven-gilt.vercel.app/user')
  .then(res => res.json())
  .then(data => {
    const userLogged = data.find(el => el?.email == user?.email)
    setPageUser(userLogged)
  })
  },[user])
  console.log(user)
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Gari Bikroy</Link>
    <li><Link to={'/blogs'}>Blogs</Link></li>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
    {
      Pageuser?.pageUser === '2' &&
      <>
      <li><Link to={'/myorders'}>My Orders</Link></li>
      </>
      // :
      // Pageuser?.defaultLanguageCode == null &&
      // <>
      // <li><Link to={'/'}>My Orders</Link></li>
      // </>

    }
      {
        Pageuser?.pageUser === '1' && 
        <>
        <li><Link to={'/additems'}>Add a Products</Link></li>
        <li><Link to={'/myproducts'}>My Products</Link></li>
        <li><Link to={'/mybuyers'}>My Buyers</Link></li>
        </>
      }
      {
        Pageuser?.role == 'admin' && <>
        <li><Link to={'/allsellers'}>All sellers</Link></li>
      <li><Link to={'/allbyers'}>All Buyers</Link></li>
        </>
      }
      {
        !user?.uid ? 
        <>
        <li><Link to={'/login'}><button className="btn btn-outline btn-info">Login</button></Link></li>
      <li onClick={handleGoogleSignIn}><button className="btn btn-outline btn-success">Login With Google</button></li>
        </>
        :
        <li onClick={handleLogOut}><Link to={'/'}><button className="btn btn-outline btn-info">Log Out</button></Link></li>
      }
    </ul>
  </div>
</div>
    );
};

export default Navber;