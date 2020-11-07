import styled from 'styled-components';



export const Subtitle = styled.h2`
    font-family: 'Lato Light';
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.rainbow.palette.text.header};
    ${props => props.uppercase && 'text-transform: uppercase;'}
    border-bottom: 1px dashed gray;
    margin-bottom: 20px;
    padding: 20px;
`;

export const Header = styled.div`
    text-align: right;
`;

export const BigPriceText = styled.h2`
    font-family: 'Lato Black';
    font-size: 56px;
    line-height: 56px;
    color: ${props => props.theme.rainbow.palette.text.main};
`;

export const TypeMeasure = styled.h3`
    font-family: Lato;
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.rainbow.palette.text.main};
    ${props => props.alignEnd && 'align-self: flex-end'}
`;

export const OutputText = styled.h5`
    font-family: ${props => props.bold ? 'Lato Bold' : 'Lato Light'};
    font-size: 12px;
    letter-spacing: 0.5px;
    display: inline;
    color: ${props => props.theme.rainbow.palette.text.main};
`;


export const Container = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
`;
export const Col = styled.div`
`;