import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home/>
        },
        {
          path: '/product',
          element: <Product></Product>
        },
        {
          path: '/friends',
          loader: async ()=> {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async ({params}) => {
            // console.log(params.friendId);
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)

          },
          element: <FriendDetails></FriendDetails>
        }
      ]
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '*',
      element: <div>404 not found. Please check the link again or retry. <br />
          <span>Go to <Link to='/home'>home</Link> </span>
      </div>
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}

export default App;
