import {createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../layouts/Home';
import ErrorPage from '../components/ErrorPage';
import BlogPage from '../components/BlogPage';
import InfoChefs from '../components/infoChefs';
import LogIn from '../components/LogIn';
import Registration from '../components/Registration';


const router = createBrowserRouter ([

  {
     path : "/",
     element : <Main></Main>,
   //   errorElement: <ErrorPage></ErrorPage>,
     children : [

        {
             path : "/",
             element : <Home></Home>
        },
        {
             path : "blog",
             element : <BlogPage></BlogPage>
        },
        {
           path : "chef/:id",
           element: <InfoChefs></InfoChefs>,
           loader : ({params}) => fetch(`http://localhost:5000/chef/${params.id }`)
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

  }


])
export default router;