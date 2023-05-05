import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const chefsSection = () => {

  const [chefs, setChefs] = useState([]);

  useEffect(() => {

    fetch('https://assignment10-taupe.vercel.app/')
      .then(res => res.json())
      .then(data => setChefs(data))



  }, [])

  return (
     <>
    <p className='text-2xl font-bold  ml-1 lg:ml-5 mt-5'>Chefs Section</p>
    <div className='flex-col   lg:grid grid-cols-3 gap-4 mx-10 lg:mx-72  p-5'>
    
      {
         chefs?.map((chef) =>

          <Card
            key={chef.id}
            chefs={chef}
          >  </Card>



        )


      }
    </div>
    </>
  );
};

export default chefsSection;