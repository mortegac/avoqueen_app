import React from 'react';
import CardsList from '../../components/CardsList'
import Title from '../../components/Titles/Tittle'
import Subtitle from '../../components/Titles/Subtitle'

const Sales = () => {
    return (
        <div className="react-rainbow-admin-applications_view-port">
                
        <div className="react-rainbow-admin-applications_container">
            
            <div>
                <Title className="rainbow-p-top_x-large">
                    Ultimas ventas realizadas
                </Title>

                <Subtitle className="rainbow-p-around_medium">
                    Listado de Ventas realizadas
                </Subtitle>

                <CardsList typeCard='sales' data={ [ { name:'uno', email:'uno@uno.cl', address:'av uno 34566, Florida' }, { name:'dos', email:'dos@uno.cl', address:'av dos 34566, Florida' }, { name:'tres', email:'tres@uno.cl', address:'av tres 34566, Florida' }, { name:'cuatro', email:'uno@uno.cl', address:'av uno 34566, Florida' } ] }/>

            </div>

        </div>
    </div>
    );
}

export default Sales;
