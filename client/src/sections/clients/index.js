import React from 'react';
import { Prismic, QueryAt } from 'react-prismic-cms';
import PageHeader from '../../components/PageHeader';
import PrismicApplicationCards from '../../components/PrismicApplicationCards';

import './styles.css';

const Clients = () => {
    return (
        <Prismic repo="rainbow-doc">
            <div className="react-rainbow-admin-applications_view-port">
                <PageHeader
                    className="react-rainbow-admin-applications_header-page"
                    title="Clientes"
                    description="Listado de clientes de su negocio" />

                <div className="react-rainbow-admin-applications_container">
                    <PrismicApplicationCards results={[]} />
                </div>
            </div>
        </Prismic>
    );
}

export default Clients;
