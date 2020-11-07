import React from 'react';

import styled from 'styled-components';

const Subtitle_ = styled.h2`
    font-family: 'Lato Light';
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.rainbow.palette.text.header};
    ${props => props.uppercase && 'text-transform: uppercase;'}
`;


const Subtitle = ( props )=>{

    return(
        <Subtitle_ className="rainbow-p-around_medium">
            { props.children }
        </Subtitle_>
    )
}

export default Subtitle;