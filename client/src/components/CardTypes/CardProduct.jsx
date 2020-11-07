import React from 'react';
import { ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { Subtitle, Header, BigPriceText, TypeMeasure, OutputText, Container, Col} from './styles';


const CardProduct = (props) => { 
    
    console.log('--props CardProduct--', props);

    const { name, stock, medida } = props;
    return (
        <Container>
            <Col>
                <Header>
                <ButtonMenu
                    menuAlignment="right"
                    menuSize="x-small"
                    // isLoading={false}
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}                   
                >
                    <MenuItem disabled label="Editar" />
                    <MenuItem label="Cambiar Stock" />
                    <MenuItem label="Deshabilitar" />
                </ButtonMenu>
                </Header>
            </Col>

            <Col>
                <Subtitle uppercase>{ name }</Subtitle>
            
            </Col>

            <Col>
                <div className="rainbow-flex rainbow-justify_center rainbow-align_center" >
                    <OutputText>stock </OutputText>
                    <BigPriceText>{ stock }</BigPriceText>
                    <TypeMeasure alignEnd>{medida}</TypeMeasure>
                </div>
            </Col>

           
            
            


            
        </Container>
    )
}

export default CardProduct;