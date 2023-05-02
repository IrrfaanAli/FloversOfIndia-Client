import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const chefsSection = () => {

  const [chefs, setChefs] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setChefs(data))



  }, [])

  return (

    <div className='flex  gap-4 p-10'>

      {
        chefs.map((chef) =>

          <Card
            key={chef.id}
            chefs={chef}
          >  </Card>



        )


      }
    </div>
  );
};

export default chefsSection;