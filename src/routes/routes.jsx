import {createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../layouts/Home';
import ErrorPage from '../components/ErrorPage';
import BlogPage from '../components/BlogPage';

const router = createBrowserRouter ([

  {
     path : "/",
     element : <Main></Main>,
     errorElement: <ErrorPage></ErrorPage>,
     children : [

        {
             path : "/",
             element : <Home></Home>
        },
        {
             path : "blog",
             element : <BlogPage></BlogPage>
        }
        
     ]

  }


])
export default router;