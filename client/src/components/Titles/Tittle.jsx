import React from 'react';

import styled from 'styled-components';

const Title_ = styled.h1.attrs(props => props.theme.rainbow)`
    font-family: 'Lato Light';
    font-size: 32px;
    text-align: center;
    color: ${props => props.palette.text.main};
`;


const Title = ( props )=>{

    return(
        <Title_ className="rainbow-p-top_x-large">
            { props.children }
        </Title_>
    )
}

export default Title;