import {createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../components/ErrorPage';

const router = createBrowserRouter ([

  {
     path : "/",
     element : <Main></Main>,
     errorElement: <ErrorPage></ErrorPage>,
     children : [

        {
             path : "/",
             element : <Main></Main>
        }
     ]

  }


])
export default router;