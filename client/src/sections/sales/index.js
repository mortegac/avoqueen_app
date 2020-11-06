import React from 'react';
import { Prismic, QueryAt } from 'react-prismic-cms';
import PageHeader from '../../components/PageHeader';
import './styles.css';

const Sales = () => {
    return (
        <Prismic repo="rainbow-doc">
            <div className="react-rainbow-admin-applications_view-port">
                <PageHeader
                    className="react-rainbow-admin-applications_header-page"
                    title="Ventas"
                    description="Listado de Ventas realizadas" />

                <div className="react-rainbow-admin-applications_container">
                   
                </div>
            </div>
        </Prismic>
    );
}

export default Sales;
