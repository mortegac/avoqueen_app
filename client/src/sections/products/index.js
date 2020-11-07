import React from 'react';
import CardsList from '../../components/CardsList'
import Title from '../../components/Titles/Tittle'
import Subtitle from '../../components/Titles/Subtitle'

const Products = () => {
    return (
        <div className="react-rainbow-admin-applications_view-port">
                
                <div className="react-rainbow-admin-applications_container">
                    
                    <div>
                        <Title className="rainbow-p-top_x-large">
                            Productos Activos
                        </Title>

                        <Subtitle className="rainbow-p-around_medium">
                        Listado de Productos de su empresa
                        </Subtitle>

                        <CardsList typeCard='product' data={ [ { name:'PALTAS', stock:100, medida:'kilos' }, { name:'POLERON', stock:1, medida:'unidad'}, { name:'YOGGER', stock:2, medida:'unidad' } ] }/>

                    </div>

                </div>
            </div>
    );
}

export default Products;
