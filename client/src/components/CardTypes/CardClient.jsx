import React from 'react';
import { Button } from 'react-rainbow-components';
import styled from 'styled-components';
import {
    Avatar,
} from '../icons';

const Subtitle = styled.h2`
    font-family: 'Lato Light';
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.rainbow.palette.text.header};
    ${props => props.uppercase && 'text-transform: uppercase;'}
`;

const BigPriceText = styled.h2`
    font-family: 'Lato Black';
    font-size: 56px;
    line-height: 56px;
    color: ${props => props.theme.rainbow.palette.text.main};
`;

const NormalPriceText = styled.h3`
    font-family: Lato;
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.rainbow.palette.text.main};
    ${props => props.alignEnd && 'align-self: flex-end'}
`;

const OutputText = styled.h5`
    font-family: ${props => props.bold ? 'Lato Bold' : 'Lato Light'};
    font-size: 15px;
    letter-spacing: 0.5px;
    display: inline;
    color: ${props => props.theme.rainbow.palette.text.main};
`;


const CardClient = (props) => { 
    const { name, email, address, clientType } = props;
    return (
        <>
            <Subtitle uppercase>{ clientType }</Subtitle>
            <Avatar height="142px" width="142px" />

           
      
            
            {/* <Subtitle uppercase>{ name }</Subtitle>
            <Subtitle uppercase>{ email }</Subtitle>
            <Subtitle uppercase>{ address }</Subtitle>
             */}
            <OutputText uppercase><OutputText  bold>{ name }</OutputText>  </OutputText>
            <OutputText uppercase><OutputText  bold></OutputText> { email } </OutputText>
            <OutputText uppercase><OutputText  bold></OutputText> { address } </OutputText>
            {/* <OutputText><OutputText bold>{ members }</OutputText>  Team Members</OutputText>
            <OutputText><OutputText bold>{ contacts }</OutputText>  Personal Contacts</OutputText> */}

            {/* <div className="rainbow-flex rainbow-m-bottom_xsmall">
                <NormalPriceText>$</NormalPriceText>
                <BigPriceText>{ packagePrice }</BigPriceText>
                <NormalPriceText alignEnd>/mo</NormalPriceText>
            </div> */}

            <Button
                label="Editar"
                variant="brand"
            />
        </>
    )
}

export default CardClient;