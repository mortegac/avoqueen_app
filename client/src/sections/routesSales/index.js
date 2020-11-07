import React from 'react';
import { MapMarker, GMap, Card } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';

import './style.css';
import Title from '../../components/Titles/Tittle'
import Subtitle from '../../components/Titles/Subtitle'

const LIBRARY_GOOGLE_MAPS_APIKEY = 'AIzaSyCJrqsjdrOHGD5FqJhEREnJLR-P8bFV8-I';


const containerStyles = {
    maxWidth: 720,
};

const styles = {
    // maxWidth: 600,
    margin: 'auto',
};
const iconContainerStyles = {
    backgroundColor: '#5c56b6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.125rem',
    width: '2.125rem',
};
const ICON = (
    <span style={iconContainerStyles}>
        <FontAwesomeIcon color="white" icon={faMap} />
    </span>
);

const RoutesSales = () => {
    return (
        <div className="react-rainbow-admin-applications_view-port">
                
                <div className="react-rainbow-admin-applications_container">
                    
                    <div>
                        <Title className="rainbow-p-top_x-large">
                            Rutas entregas
                        </Title>

                        <Subtitle className="rainbow-p-around_medium">
                            Rutas separadas por comunas de los despachos
                        </Subtitle>

                        
                        
                        <Card
                            className="rainbow-m-vertical_x-large rainbow-m_auto"
                            title="La Reina"
                            icon={ICON}
                            style={containerStyles}
                        >
                            <GMap
                                apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
                                zoom={14}
                                latitude={-33.4353391}
                                    longitude={-70.5393732}
                                header="Despachos en La Reina"
                            >
                                <MapMarker
                                    latitude={-33.4353391}
                                    longitude={-70.5393732}
                                    label="Portal La Reina"
                                    description=" Centro comercial Portal la Reina"
                                />

                                <MapMarker
                                    latitude={-33.4361986}
                                    longitude={-70.5556811}
                                    label="Aeródromo Eulogio Sánchez"
                                    description="Aerodromo privado de uso publico; muy ordenado. Con sistemas  de servicion de  control aereo. Calles de rodaje delimitadas y dos centros de combustible"
                                />
                            </GMap>
                        </Card>
                        
                        <Card
                            className="rainbow-m-vertical_x-large rainbow-m_auto"
                            title="Peñalolen"
                            icon={ICON}
                            style={containerStyles}
                        >
                            <GMap
                                apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
                                zoom={15}
                                latitude={-33.4786898}
                                longitude={-70.5443865}
                                header="Despachos en Peñalolen"
                            >
                                <MapMarker
                                    latitude={-33.4786898}
                                    longitude={-70.5443865}
                                    label="Barrio consistorial"
                                    description="Barrio Consistorial de Peñalolén"
                                />

                                <MapMarker
                                    latitude={-33.4792332}
                                    longitude={-70.5532437}
                                    label="Parroquia San Alberto Hurtado"
                                    description="Parroquia San Alberto Hurtado de Peñalolén"
                                />
                            </GMap>
                        </Card>
                        
                    </div>

                </div>
            </div>
    );
}

export default RoutesSales;
