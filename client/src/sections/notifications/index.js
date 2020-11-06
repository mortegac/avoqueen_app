import React from 'react';
import { Prismic, QueryAt } from 'react-prismic-cms';
import PageHeader from '../../components/PageHeader';
import PrismicApplicationCards from '../../components/PrismicApplicationCards';

import './styles.css';

const Notifications = () => {
    return (
        <Prismic repo="rainbow-doc">
            <div className="react-rainbow-admin-applications_view-port">
                <PageHeader
                    className="react-rainbow-admin-applications_header-page"
                    title="Notificaciones"
                    description="Revise sus notificaciones" />

                <div className="react-rainbow-admin-applications_container">
                    <PrismicApplicationCards results={[]} />
                </div>
            </div>
        </Prismic>
    );
}

export default Notifications;
