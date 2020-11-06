import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-rainbow-components/components/Spinner';
import {
    ShoppingCartIcon,
    UsersIcon,
    LikeIcon,
    ErrorIcon,
} from '../../components/icons';
import ListCard from './listCard';
import ChartsSection from './chartsSection';
import LastMessagesList from './lastMessagesList';
import NewUsersList from './newUsersList';
import PageHeader from '../../components/PageHeader';
import Tile from '../../components/Tile';
// import fetchDashboardData from '../../redux/actions/dashboard';
import './styles.css';

function ContentPage(props) {
    const {
          isLoading,
    } = props;

    if (isLoading) {
        return <Spinner size="large" />;
    } return (
        <div>
           <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                <Tile
                    title="Ventas en Noviembre"
                    label={100}
                    icon={<ShoppingCartIcon />} />

                <Tile
                    title="Clientes"
                    label={20}
                    icon={<UsersIcon className="react-rainbow-admin-dashboard_tile-icon" />} />

                <Tile
                    title="Productos"
                    label={50}
                    icon={<LikeIcon />} />

            </section>

            

            <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                {/* <ListCard
                    title="Last Messages"
                    component={<LastMessagesList lastMessages={lastMessages} />}
                    footerLink={(
                        <Link className="react-rainbow-admin-dashboard_list-card--footer-link rainbow-color_brand" to="/messages">
                            View all messages
                        </Link>
                    )} />

                <ListCard
                    title="New Users"
                    component={<NewUsersList newUsers={newUsers} />}
                    footerLink={(
                        <Link className="react-rainbow-admin-dashboard_list-card--footer-link rainbow-color_brand" to="/pages/users">
                            View all users
                        </Link>
                    )} />  */}
            </section>
        </div>
    );
}


const Dashboard = (props) =>{

    return(

        <div className="react-rainbow-admin-dashboard_view-port">
            <PageHeader
                title="Dashboard"
                description="Panel de administración de su empresa" />
            <ContentPage {...props} />
        </div>
    )
}

export default Dashboard;