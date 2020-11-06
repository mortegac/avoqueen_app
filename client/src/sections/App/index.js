import React, { useState } from 'react';
import classnames from 'classnames';
import Application from 'react-rainbow-components/components/Application';
import Sidebar from 'react-rainbow-components/components/Sidebar';
import SidebarItem from 'react-rainbow-components/components/SidebarItem';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {
    BrowserRouter,
    Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';

import history from './history';
import Applications from '../applications';
import Dashboard from '../dashboard';
import Clients from '../clients';
import Sales from '../sales';
import Products from '../products';
import Shopping from '../shopping';
import Notifications from '../notifications';
import Profile from '../profile';


// import Routes from './routes';
import SectionHeading from '../../components/SectionHeading';
import {
    DashboardIcon,
    Avatar,
    ShoppingCartIcon,
    Attach,
    PricingIcon,
} from '../../components/icons';


import './styles.css';


const App = (props)=>{
   
   console.log('--props--', props)
    const [selectedItem, setSelectedItem] = useState();
    const { toogleSidebar, navigate, isSidebarHidden } = props;
    
    const getSidebarClassNames = ()=> {
        const { isSidebarHidden } = props;
        return classnames('react-rainbow-admin-app_sidebar-container', {
            'react-rainbow-admin-app_sidebar-container--sidebar-hidden': isSidebarHidden,
        });
    }
   

    return(
        <Application>
            {/* <BrowserRouter> */}
            <RenderIf isTrue={!isSidebarHidden}>
                <div
                    className="react-rainbow-admin-app_backdrop"
                    role="presentation"
                    onClick={toogleSidebar} />
            </RenderIf>
            <SectionHeading onToogleSidebar={toogleSidebar} history={history}/>
            <div className={getSidebarClassNames()}>
                <Sidebar
                    className="react-rainbow-admin-app_sidebar"
                    // selectedItem={selectedItem}
                    // onSelect={setSelectedItem({ selectedItem })}
                    >
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<DashboardIcon />}
                        name="dashboard"
                        label="Dashboard" 
                        onClick={ () => history.push('/dashboard') }
                    />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<Avatar />}
                        name="pages"
                        label="Clientes"
                        onClick={ () => history.push('/clientes') }
                    />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<ShoppingCartIcon />}
                        name="applications"
                        label="Ventas"
                        onClick={ () => history.push('/ventas') }
                    />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<Attach />}
                        name="components"
                        label="Productos"
                        onClick={ () => history.push('/productos') }
                    />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<PricingIcon />}
                        name="messages"
                        label="Compras"
                        onClick={ () => history.push('/compras') }
                    />                   
                </Sidebar>
                <RenderIf isTrue={!isSidebarHidden}>
                    <div className="react-rainbow-admin-app_sidebar-back-button-container">
                        <ButtonIcon
                            onClick={toogleSidebar}
                            size="large"
                            icon={
                                <FontAwesomeIcon className="react-rainbow-admin-app_sidebar-back-button-icon" icon={faArrowLeft} />
                            } />
                    </div>
                </RenderIf>
            </div>
                <div className="react-rainbow-admin-app_router-container">
                    <Router history={history}>
                        <Switch>
                            <Redirect from="/" exact to="/dashboard" />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/clientes" component={Clients} />
                            <Route exact path="/ventas" component={Sales} />
                            <Route exact path="/productos" component={Products} />
                            <Route exact path="/compras" component={Shopping} />
                            <Route exact path="/notificaciones" component={Notifications} />
                            <Route exact path="/perfil" component={Profile} />
                            
                        </Switch>
                    </Router>
                </div>
        </Application>
    )
}



export default App;
