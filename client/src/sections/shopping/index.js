import React from 'react';
import { Prismic, QueryAt } from 'react-prismic-cms';
import PageHeader from '../../components/PageHeader';
import './styles.css';

const Shopping = () => {
    return (
        <Prismic repo="rainbow-doc">
            <div className="react-rainbow-admin-applications_view-port">
                <PageHeader
                    className="react-rainbow-admin-applications_header-page"
                    title="Compras"
                    description="Listado de Compras de insumos realizadas" />

                <div className="react-rainbow-admin-applications_container">
                   
                </div>
            </div>
        </Prismic>
    );
}

export default Shopping;
