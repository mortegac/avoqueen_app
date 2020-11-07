import React from 'react';

import CardTypes from '../CardTypes'




const CardsList = (props) =>{

    const { data } = props;
    const listItems = data.map((item, index) =>
        // <li key={`${item.name}${index}`}>{item.name}</li>
        <CardTypes key={`${item.name}${index}`} packageType="Standard" packagePrice="24" projectsCount="100" members="5" contacts="50"/>
    );

    return(
        <div className="rainbow-align-content_center rainbow-flex_wrap rainbow-p-around_medium">
        {
            Array.isArray(data)?
            (
                data.map((item, index) =>
                <CardTypes key={`${item.name}${index}`}
                    {...props}
                    {...item}
                    
                />
            )
            ):(
                <li><h3>Sin registros</h3></li>
            )
        }
        </div>

   )
}


export default CardsList;

// clientType="Standard"
//                     name={item.name}
//                     email={item.email}
//                     address={item.address}
//                     packagePrice="24" 
//                     projectsCount="100" 
//                     members="5" 
//                     contacts="50"