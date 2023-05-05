import {createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../layouts/Home';
import ErrorPage from '../components/ErrorPage';
import BlogPage from '../components/BlogPage';
import InfoChefs from '../components/infoChefs';
import LogIn from '../components/LogIn';
import Registration from '../components/Registration';
import PrivateRoute from '../components/PrivateRoute';


const router = createBrowserRouter ([

  {
     path : "/",
     element : <Main></Main>,
     children : [

        {
             path : "/",
             element : <Home></Home>
        },
        
        {
           path : "chef/:id",
           element: <PrivateRoute><InfoChefs></InfoChefs></PrivateRoute>,
           loader : ({params}) => fetch(`https://assignment10-taupe.vercel.app/chef/${params.id}`)
        },
        {
         path :"login",
         element:<LogIn></LogIn>
        },
        {
         path :"register",
         element:<Registration></Registration>
        },
        {
         path :"*",
         element:<ErrorPage></ErrorPage>
        }
        
     ]

  },
  {
   path : "/blog",
   element : <BlogPage></BlogPage>
}


])
export default router;