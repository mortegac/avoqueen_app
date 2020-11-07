
import React, {useState} from 'react';
import styled from 'styled-components';
import { Card } from 'react-rainbow-components';
import CardClient from './CardClient';
import CardProduct from './CardProduct';
import CardSales from './CardSales';

const StyledCard = styled(Card)`
    width: 240px;
    height: 363px;
`;

const StyledCardProduct = styled(Card)`
    width: 240px;
    height: 240px;
`;





const CardTypes = (props) =>{

    console.log('--props CardTypes--', props);
    
    const typeCards = () => {

        const { typeCard } = props;
        try {
                
            switch (props.typeCard) {

                case "client": return (
                    <StyledCard
                        className="rainbow-flex rainbow-flex_column rainbow-align_center rainbow-justify_space-around rainbow-p-vertical_small rainbow-m-around_small"
                    ><CardClient {...props} />
                    </StyledCard>
                )

                case "product": return (
                    <StyledCardProduct
                        className="rainbow-flex rainbow-p-vertical_small rainbow-p-horizontal_small rainbow-p-vertical_small rainbow-m-around_small"
                    ><CardProduct {...props} />
                    </StyledCardProduct>
                )

                case "sales": return (
                    <StyledCardProduct
                        className="rainbow-flex rainbow-p-vertical_small rainbow-p-horizontal_small rainbow-p-vertical_small rainbow-m-around_small"
                    ><CardSales {...props} />
                    </StyledCardProduct>
                )
                
                case "shopping": return (
                    <StyledCard
                        className="rainbow-flex rainbow-flex_column rainbow-align_center rainbow-justify_space-around rainbow-p-vertical_small rainbow-m-around_small"
                    ><CardClient {...props} />
                    </StyledCard>
                )


                default: return (
                    <StyledCard
                        className="rainbow-flex rainbow-flex_column rainbow-align_center rainbow-justify_space-around rainbow-p-vertical_small rainbow-m-around_small"
                    ><CardClient {...props} />
                    </StyledCard>
                )
            }
    
        }catch(error){ console.error() }
    };


    return typeCards()
}

export default CardTypes;





