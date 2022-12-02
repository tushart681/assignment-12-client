import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='max-w mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
