import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import AvatarMenu from 'react-rainbow-components/components/AvatarMenu';
import Avatar from 'react-rainbow-components/components/Avatar';
import Input from 'react-rainbow-components/components/Input';
import MenuItem from 'react-rainbow-components/components/MenuItem';
import MenuDivider from 'react-rainbow-components/components/MenuDivider';
import ButtonMenu from 'react-rainbow-components/components/ButtonMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faPencilAlt,
    faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import {
    ShoppingCartIcon,
    MessageIcon,
    BarsIcon,
} from '../icons';
import Notification from './notification';
import IconNotification from './iconNotification';
import './styles.css';

export default function SectionHeading({ history, onToogleSidebar }) {
    return (
        <header className="react-rainbow-admin_header rainbow-position_fixed rainbow-flex rainbow-align_center rainbow-p-horizontal_large rainbow-background-color_white">
            <img src="/assets/images/rainbow-logo.svg" alt="rainbow logo" className="react-rainbow-admin_header-logo" />
            <Input
                className="rainbow-m-left_xx-large react-rainbow-admin_header-search"
                placeholder="search"
                label="header search"
                hideLabel
                icon={<FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-2" />} />
            <section className="rainbow-flex rainbow-align_center react-rainbow-admin_header-actions">
               
                <ButtonMenu
                    className="rainbow-m-horizontal_medium react-rainbow-admin_header-button-notification"
                    menuAlignment="right"
                    buttonVariant="base"
                    buttonSize="large"
                    icon={<FontAwesomeIcon icon={faBell}
                    onClick={ () => history.push('/notificaciones') }
                    />}>
                    <MenuItem
                        icon={
                            <IconNotification icon={<MessageIcon className="react-rainbow-admin_header--notification-icon" />} />
                        }
                        label={(
                            <Notification
                                title="Revise sus mensajes" />
                        )} 
                        onClick={ () => history.push('/notificaciones') }
                    />
                </ButtonMenu>
                <AvatarMenu
                    src="/assets/images/user2.jpg"
                    assistiveText="Nicole Rivera"
                    menuAlignment="right"
                    menuSize="small"
                    title="Nicole Rivera">
                    <li className="rainbow-p-horizontal_small rainbow-align_center rainbow-flex">
                        <Avatar
                            src="/assets/images/user2.jpg"
                            assistiveText="Nicole Rivera"
                            title="Nicole Rivera"
                            size="medium" />
                        <div className="rainbow-m-left_x-small">
                            <p className="rainbow-font-size-text_medium rainbow-color_dark-1">Nicole</p>
                            <p className="rainbow-font-size-text_small rainbow-color_gray-3">nicoleriver@gmail.com</p>
                        </div>
                    </li>
                    <MenuDivider variant="space" />
                    <MenuItem
                        label="Editar Perfil"
                        icon={<FontAwesomeIcon icon={faPencilAlt} />}
                        iconPosition="left"
                        onClick={ () => history.push('/perfil') }
                    />
                    <MenuItem
                        label="Logout"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        iconPosition="left" />
                </AvatarMenu>
            </section>
            <ButtonIcon
                onClick={onToogleSidebar}
                className="react-rainbow-admin_header-hamburger-button"
                size="large"
                icon={<BarsIcon />} />
        </header>
    );
}

SectionHeading.propTypes = {
    onToogleSidebar: PropTypes.func,
};

SectionHeading.defaultProps = {
    onToogleSidebar: () => {},
};
